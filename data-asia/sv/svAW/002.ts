import { Card } from "../../../interfaces"
import Set from "../svAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "潤水鴨",
		th: "แคว็กซ์",
		id: "Quaxly"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的 凝膠有防水和防污的效果。",
		th: "มาจากดินแดนห่างไกลตั้งแต่ในสมัยอดีต เจลที่หลั่งจากปีกจะขับน้ำและสิ่งสกปรกออก",
		id: "Dulu, Quaxly bermigrasi dari daerah yang jauh. Gel yang disekresi dari bulunya menangkis air dan kotoran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			th: "ปัด",
			id: "Tumbuk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢",
			th: "เตะ",
			id: "Kick"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card