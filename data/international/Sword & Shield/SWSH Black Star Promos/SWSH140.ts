import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu V-UNION",
		'fr-fr': "Pikachu V-UNION",
		'de-de': "Pikachu V-UNION",
		'es-es': "Pikachu V-UNIÓN",
		'pt-br': "Pikachu V-UNIÃO",
		'it-it': "Pikachu V UNIONE"
	},

	rarity: "Promo",
	category: "Pokemon",
	stage: "V-UNION",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Union Gain",
			'fr-fr': "Gain Union"
		},

		effect: {
			'en-us': "Attach up to 2 Lightning Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Shocking Shock",
			'fr-fr': "Choc Choquant"
		},

		damage: 120,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Disconnect",
			'fr-fr': "Déconnexion"
		},

		damage: 150,

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball Together",
			'fr-fr': "Boule Élek Groupée"
		},

		damage: 250
	}],

	regulationMark: "E",
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 300,
	types: ["Lightning"],
	retreat: 0,

	thirdParty: {
		cardmarket: 576738
	}
}

export default card
