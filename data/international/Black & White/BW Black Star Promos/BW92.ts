import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
	},
	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solar Revelation",
				'fr-fr': "Révélation Solaire",
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l'Énergie est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psy Report",
				'fr-fr': "Observation Psychique",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Its fur is so sensitive, it can sense minute shifts in the air and predict the weather.",
	},
}

export default card
