import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Leafeon VMAX",
		'fr-fr': "Phyllali VMAX",
		'es-es': "Leafeon VMAX",
		'it-it': "Leafeon VMAX",
		'pt-br': "Leafeon VMAX",
		'de-de': "Folipurba VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",
	dexId: [470],

	evolveFrom: {
		'en-us': "Leafeon V",
		'fr-fr': "Phyllali-V",
		'es-es': "Leafeon V",
		'it-it': "Leafeon-V",
		'pt-br': "Leafeon V",
		'de-de': "Folipurba-V"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Grass Knot",
			'fr-fr': "Nœud Herbe"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque  dans le Coût de Retraite du Pokémon Actif de votre adversaire."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Max Leaf",
			'fr-fr': "Feuillomax"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 170
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574262,
				tcgplayer: 246693
			}
		},
	],
}

export default card
