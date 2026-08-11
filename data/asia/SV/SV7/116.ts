import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌ex",
		'zh-cn': "閃焰王牌ex",
		'ja-jp': "エースバーンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "閃焰強襲",
			'zh-cn': "閃焰強襲",
			'ja-jp': "フレアストライク"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃焰強襲」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「閃焰強襲」。",
			'ja-jp': "次の自分の番、このポケモンは「フレアストライク」が使えない。"
		},

		damage: 280,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "石榴石截擊",
			'zh-cn': "石榴石截擊",
			'ja-jp': "ガーネットボレー"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]",
			'ja-jp': "相手のポケモン1匹に、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Fire", "Fighting", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 779130,
				tcgplayer: 567971,
			},
		},
	],

	retreat: 0,
	regulationMark: "H",
	rarity: "None"
}

export default card