import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "管理人"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、場に「公民館」が出ているなら、この「管理人」はトラッシュせず、山札にもどして切る。"
	},

	trainerType: "Supporter"
}

export default card