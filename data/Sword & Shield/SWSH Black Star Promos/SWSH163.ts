import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	stage: "V-UNION",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Zacian V-UNION",
		fr: "Zacian V-UNION",
		de: "Zacian V-UNION",
		es: "Zacian V-UNIÓN",
		pt: "Zacian V-UNIÃO",
		it: "Zacian V UNIONE"
	},

	rarity: "None",
	hp: 320,
	types: ["Metal"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain"
		},

		effect: {
			en: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Dance of the Crowned Sword"
		},

		damage: 150,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 150 less damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Steel Cut"
		},

		damage: 200
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Master Blade"
		},

		damage: 340,

		effect: {
			en: "Discard 3 Energy from this Pokémon."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0,

	thirdParty: {
		cardmarket: 572163
	}
}

export default card
