import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コジオ",
		'zh-tw': "鹽石寶",
		'id-id': "Nacli"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	dexId: [932],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。",
		'id-id': "Nacli terlahir di kubah garam di dasar tanah. Karena ia membagikan garam yang begitu berharga, Pokémon ini dijaga dengan baik pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "しおぬり",
			'zh-tw': "抹鹽",
			'id-id': "Oles Garam"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「20」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「20」HP。",
			'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 20."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "たいあたり",
			'zh-tw': "撞擊",
			'id-id': "Serudukan"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747637,
				tcgplayer: 567684,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card