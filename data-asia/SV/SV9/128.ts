import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのザシアンex"
	},

	illustrator: "DOM",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "せつなぎり"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "ブレイブスラッシュ"
		},

		damage: 240,

		effect: {
			ja: "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card