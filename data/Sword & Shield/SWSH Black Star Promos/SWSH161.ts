import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [150],
	set: Set,
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	stage: "V-UNION",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Mewtwo V-UNION",
		fr: "Mewtwo V-UNION",
		de: "Mewtu V-UNION",
		es: "Mewtwo V-UNIÓN",
		pt: "Mewtwo V-UNIÃO",
		it: "Mewtwo V UNIONE"
	},

	rarity: "None",
	hp: 310,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Photon Barrier"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain"
		},

		effect: {
			en: "Attach up to 2 Psychic Energy cards from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Regeneration"
		},

		effect: {
			en: "Heal 200 damage from this Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psysplosion"
		},

		effect: {
			en: "Put 16 damage counters on your opponent's Pokémon in any way you like."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Final Burn"
		},

		damage: 300
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0
}

export default card
