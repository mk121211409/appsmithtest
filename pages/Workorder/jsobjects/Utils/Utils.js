export default {
	formatDateWithWeek(dateStr) {
		return moment(dateStr).format("DD.MM.YYYY") + " (N" + moment(dateStr).week() + ")";
	}
}