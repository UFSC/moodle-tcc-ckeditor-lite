CKEDITOR.plugins.setLang( 'lite', 'pt-br', {
	TOGGLE_TRACKING: "Alternar Acompanhamento de Alterações",
	TOGGLE_SHOW: "Alternar Acompanhamento de Alterações",
	ACCEPT_ALL: "Aceita todas as alterações",
	REJECT_ALL: "Rejeita todas as alterações",
	ACCEPT_ONE: "Aceita a Alteração",
	REJECT_ONE: "Rejeita a Alteração",
	START_TRACKING: "Começa a controlar as alterações",
	STOP_TRACKING: "Para de controlar as alterações",
	PENDING_CHANGES: "Seu documento possui alterações pendentes.\nPor favor, resolva-as antes de desligar o controle de alterações.",
	HIDE_TRACKED: "Oculta as alterações controladas",
	SHOW_TRACKED: "Apresenta as alterações controladas",
	CHANGE_TYPE_ADDED: "adicionado",
	CHANGE_TYPE_DELETED: "deletado",
	MONTHS: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
	NOW: "agora",
	MINUTE_AGO: "ha 1 minuto",
	MINUTES_AGO: "ha xMinutes minutos",
	BY: "por",
	ON: "em",
	AT: "as",
	LITE_LABELS_DATE: function(day, month, year)
	{
		if(typeof(year) != 'undefined') {
			year = ", " + year;
		}
		else {
			year = "";
		}
		return this.MONTHS[month] + " " + day + year;
	}
});