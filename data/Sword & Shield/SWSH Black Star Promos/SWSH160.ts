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
			en: "Photon Barrier",
			fr: "Bouclier Photon"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain",
			fr: "Gain Union"
		},

		effect: {
			en: "Attach up to 2 Psychic Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Regeneration",
			fr: "Super Rétablissement"
		},

		effect: {
			en: "Heal 200 damage from this Pokémon.",
			fr: "Soignez 200 dégâts de ce Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psysplosion",
			fr: "Détonation Psy"
		},

		effect: {
			en: "Put 16 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 16 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Final Burn",
			fr: "Brûlure Finale"
		},

		damage: 300
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0,

	thirdParty: {
		cardmarket: 572159
	}
}

export default card
