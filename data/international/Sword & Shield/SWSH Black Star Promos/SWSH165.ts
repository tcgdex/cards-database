import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [888],
	set: Set,
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	stage: "V-UNION",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
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
		'en-us': "Zacian V-UNION",
		'fr-fr': "Zacian V-UNION",
		'de-de': "Zacian V-UNION",
		'es-es': "Zacian V-UNIÓN",
		'pt-br': "Zacian V-UNIÃO",
		'it-it': "Zacian V UNIONE"
	},

	rarity: "Promo",
	hp: 320,
	types: ["Metal"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Union Gain",
			'fr-fr': "Gain Union"
		},

		effect: {
			'en-us': "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Dance of the Crowned Sword",
			'fr-fr': "Danse de l'Épée Suprême"
		},

		damage: 150,

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 150 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 150 dégâts de moins (avant application de la Faiblesse et de la Résistance)."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Steel Cut",
			'fr-fr': "Coupe d'Acier"
		},

		damage: 200
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Master Blade",
			'fr-fr': "Lame Maîtresse"
		},

		damage: 340,

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon."
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
