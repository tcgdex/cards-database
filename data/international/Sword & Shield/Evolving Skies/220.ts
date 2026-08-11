import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Duraludon VMAX",
		'fr-fr': "Duralugon VMAX",
		'es-es': "Duraludon VMAX",
		'it-it': "Duraludon VMAX",
		'pt-br': "Duraludon VMAX",
		'de-de': "Duraludon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "Saki Hayashiro",
	dexId: [884],

	evolveFrom: {
		'en-us': "Duraludon V",
		'fr-fr': "Duralugon-V",
		'es-es': "Duraludon V",
		'it-it': "Duraludon-V",
		'pt-br': "Duraludon V",
		'de-de': "Duraludon-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Skyscraper",
			'fr-fr': "Gratte-Ciel"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			'en-us': "G-Max Pulverization",
			'fr-fr': "Pulvérisation G-Max"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574278,
				tcgplayer: 246754
			}
		},
	],
}

export default card
