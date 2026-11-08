import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		'fr-fr': "Mentali",
	},
	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [196],
	hp: 90,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'fr-fr': "Révélation Solaire"
			},
			effect: {
				'fr-fr': "Évitez tous les effets des attaques de vyotre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l'Energie est attachée. Observation Psychique Votre adversaire montre sa main."
			},
		}
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'fr-fr': "Observation Psychique",
			},
			effect: {
				'fr-fr': "Votre adversaire montre sa main."
			},
			damage: 60,
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361727,
			}
		}
	]
}

export default card
