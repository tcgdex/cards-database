import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "エンテイ"
	},

	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "プレッシャー"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-20」される。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ブレイズボール"
		},

		damage: "60＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card