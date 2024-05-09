import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ミカルゲ"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [442],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しっこくのわざわい"
		},

		effect: {
			ja: "このポケモンがいるかぎり、おたがいの場のたねポケモンの「ポケモンV」の特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぱっときえる"
		},

		damage: 10,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card