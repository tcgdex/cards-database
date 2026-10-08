import { Card } from "../../../interfaces"
import Set from "../SVJL"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイヤー"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "美しく 燃えあがる 翼で 山道を 照らし 遭難者を 助けたと 言い伝えられている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアフロート"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "えんじょうひこう"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	rarity: "None"
}

export default card