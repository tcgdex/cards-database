import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのハラバリーex"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エレキストリーマー"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分の「ナンジャモのポケモン」につける。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			ja: "サンダーボルト"
		},

		damage: 230,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card