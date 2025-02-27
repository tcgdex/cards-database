import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのアーマーガア",
		'zh-tw': "赫普的鋼鎧鴉",
		'zh-cn': "赫普的鋼鎧鴉"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [823],
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "羽の 一部が 鋼に 変化。 重たい 翼を ものともせずに 大空を ゆうゆうと 飛びまわる。",
		'zh-tw': "部分的羽毛變成了鋼鐵。 即使翅膀沉重也能夠 悠遊自在地飛在空中。",
		'zh-cn': "部分的羽毛變成了鋼鐵。 即使翅膀沉重也能夠 悠遊自在地飛在空中。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきぬける",
			'zh-tw': "穿通",
			'zh-cn': "穿通"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻備戰寶可夢也受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "はがねのつばさ",
			'zh-tw': "鋼翼",
			'zh-cn': "鋼翼"
		},

		damage: 150,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-60」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-60」點。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card