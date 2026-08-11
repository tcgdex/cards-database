import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'de-de': "Venuflibis"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stretch Vine",
				'fr-fr': "Longue Liane",
				'de-de': "Stretch Vine"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 2 of your opponent's benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-vie",
				'de-de': "Absorb"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Carnivine.",
				'fr-fr': "Retirez à Vortente 2 marqueurs de dégât.",
				'de-de': "Remove 2 damage counters from Carnivine."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Vine Extract",
				'fr-fr': "Extrait de plante",
				'de-de': "Vine Extrakt"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and Poisoned.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé et Empoisonné.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and poisoned."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84102,
				cardmarket: 278464
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278464,
				tcgplayer: 84102
			}
		}
	],

}

export default card
