import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "河馬獸",
		'ja-jp': "カバルドン"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "偶爾會有石子卡在身體的孔洞裡。因為石居蟹會幫忙把石子拿出來， 所以會用心地保護牠們。",
		'ja-jp': "体の 穴には たまに 石が 詰まる。 石を 取ってくれるので イシズマイを 大切に 守る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			'ja-jp': "かみつく"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "沙之吐息",
			'ja-jp': "サンドブレス"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 609810,
				tcgplayer: 570612,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 577629,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [450],
}

export default card