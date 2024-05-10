import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キレイハナ",
		'zh-tw': "美麗花"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [182],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ときおり キレイハナが 集まって 踊るような しぐさを みせる。 太陽を呼ぶ 儀式と 言われる。",
		'zh-tw': "有時美麗花們會聚在一起，做出像是跳舞的動作。據說這是呼喚太陽的儀式。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねむりごな",
			'zh-tw': "催眠粉"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "パワフルダンス",
			'zh-tw': "強力舞"
		},

		damage: "90×",

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。",
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card