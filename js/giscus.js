const getCurrentLanguage = function () {
	var lang = translate.language.getCurrent();
	var giscus_lang = "zh-CN";
	switch (lang) {
		case "chinese_traditional":
			giscus_lang = "zh-TW";
			break;
		case "english":
			giscus_lang = "en";
			break;
		case "spanish":
			giscus_lang = "es";
			break;
		case "japanese":
			giscus_lang = "ja";
			break;
		case "korean":
			giscus_lang = "ko";
			break;
		case "french":
			giscus_lang = "fr";
			break;
		case "arabic":
			giscus_lang = "ar";
			break;
		default:
			giscus_lang = "zh-CN";
			break;
	}
	return giscus_lang;
};

var SetupGiscus = function (giscus_lang) {
	const script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://giscus.app/client.js";


	script.setAttribute("data-repo", "SaveSeaFromNuc-pollutedWater/FactsAboutNuc-pollutedWater");
	script.setAttribute("data-repo-id", "R_kgDOKMrxcw");
	script.setAttribute("data-category", "Announcements");
	script.setAttribute("data-category-id", "DIC_kwDOKMrxc84CY70j");

	script.setAttribute("data-mapping", "title");
	script.setAttribute("data-strict", "1");
	script.setAttribute("data-reactions-enabled", "1");
	script.setAttribute("data-emit-metadata", "0");
	script.setAttribute("data-input-position", "top");
	script.setAttribute("data-theme", "light_high_contrast");
	script.setAttribute("data-lang", giscus_lang);
	// script.setAttribute("data-loading", "lazy");

	script.crossOrigin = "anonymous";
	script.async = true;
	if (document.getElementById("giscus-container") != null) {
		document.getElementById("giscus-container").appendChild(script);
	}
};

window.addEventListener('load', () => SetupGiscus(getCurrentLanguage()));
