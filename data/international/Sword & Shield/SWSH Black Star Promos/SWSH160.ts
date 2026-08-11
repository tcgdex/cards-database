import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [150],
	set: Set,
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	stage: "V-UNION",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Mewtwo V-UNION",
		'fr-fr': "Mewtwo V-UNION",
		'de-de': "Mewtu V-UNION",
		'es-es': "Mewtwo V-UNIÓN",
		'pt-br': "Mewtwo V-UNIÃO",
		'it-it': "Mewtwo V UNIONE"
	},

	rarity: "Promo",
	hp: 310,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Photon Barrier",
			'fr-fr': "Bouclier Photon"
		},

		effect: {
			'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Union Gain",
			'fr-fr': "Gain Union"
		},

		effect: {
			'en-us': "Attach up to 2 Psychic Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Super Regeneration",
			'fr-fr': "Super Rétablissement"
		},

		effect: {
			'en-us': "Heal 200 damage from this Pokémon.",
			'fr-fr': "Soignez 200 dégâts de ce Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psysplosion",
			'fr-fr': "Détonation Psy"
		},

		effect: {
			'en-us': "Put 16 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 16 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Final Burn",
			'fr-fr': "Brûlure Finale"
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
