import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのピッピex"
	},

	illustrator: "Susumu Maeya",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フェアリーゾーン"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手の場のポケモン全員の弱点は、すべてタイプになる。［弱点は「×2」で計算する。］"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "フルムーンロンド"
		},

		damage: "20＋",

		effect: {
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card