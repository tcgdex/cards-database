import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ビクティニ"
	},

	illustrator: "313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [494],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ビクトリーエール"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のタイプの進化ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card