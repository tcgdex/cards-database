import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ビビヨン"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "花咲く 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ミラクルパウダー"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、特殊状態の中から1つ選び、相手のバトルポケモンをその状態にする。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしのさざめき"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card