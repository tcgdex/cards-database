import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マンムーex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "None",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マンモスキャリー"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "とどろくこうしん"
		},

		damage: "180＋",

		effect: {
			ja: "自分のベンチの2進化ポケモンの数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card