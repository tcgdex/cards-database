import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コジオ",
		'zh-tw': "鹽石寶",
		'th-th': "โคจีโอ",
		'id-id': "Nacli"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [932],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。",
		'th-th': "เกิดในชั้นหินเกลือใต้ดิน ในสมัยก่อนมีผู้ให้ความสำคัญกับมันเป็นอย่างมากเพราะมันแบ่งปันเกลือที่แสนล้ำค่าให้",
		'id-id': "Nacli terlahir di kubah garam di dasar tanah. Karena ia membagikan garam yang begitu berharga, Pokémon ini dijaga dengan baik pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ずつき",
			'zh-tw': "頭錘",
			'th-th': "พุ่งหัวชน",
			'id-id': "Tandukan Kepala"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705349,
				tcgplayer: 565907,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card