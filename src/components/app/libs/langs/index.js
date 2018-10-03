import i18n from "i18n-js"
import en from "./en"
import fr from "./fr"

i18n.translations.en = en
i18n.translations.fr = fr
i18n.defaultLocale = "en"
i18n.locale = localStorage.getItem("language") || "en"

const locales = {
  en: () => import("./en"),
  fr: () => import("./fr"),
}

export async function changeLang(locale) {
  if (!i18n.translations[locale]) {
    i18n.translations[locale] = (await locales[locale]()).default
  }
  i18n.locale = locale
}
