try{
    translate.listener.start();
    translate.language.getLocal();
    translate.setAutoDiscriminateLocalLanguage();
    translate.language.setUrlParamControl();
    translate.ignore.class.push('notTranslate');
}
catch(e){console.log(e);}
translate.setUseVersion2();
translate.execute();