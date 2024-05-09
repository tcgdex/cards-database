import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベトン"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくぶくろ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のどくのポケモンは、進化・退化してもどくが回復しない。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ポイズンアタック"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card