import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ミミズズ",
		'zh-tw': "拖拖蚓"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [968],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "敵に 襲われると 体毛を こぶしのように 使い パンチの 嵐を お見舞いするのだ。",
		'zh-tw': "遭到攻擊的時候，會把體毛如拳頭般地使用， 朝著敵人奉上拳擊風暴。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "えいようてつぶん",
			'zh-tw': "營養鐵質"
		},

		effect: {
			ja: "このポケモンにエネルギーが3個以上ついているなら、このポケモンの最大HPは「+100」される。",
			'zh-tw': "若這隻寶可夢身上附有3個以上【鋼】能量，則這隻寶可夢的最大HP「+100」。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つきぬける",
			'zh-tw': "穿通"
		},

		damage: 100,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card