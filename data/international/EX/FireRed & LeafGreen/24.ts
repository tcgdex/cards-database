import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'de-de': "Ibitak"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Free Flight",
				'fr-fr': "Vol gratuit",
				'de-de': "Free Flight"
			},
			effect: {
				'en-us': "If Fearow has no Energy attached to it, Fearow's Retreat Cost is 0.",
				'fr-fr': "Si Rapasdepic ne possède pas d'Énergie, son Coût de retraite est de 0.",
				'de-de': "If Fearow has no Energy attached to it, Fearow's Retreat Cost is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shot Air",
				'fr-fr': "Bouffée d'air",
				'de-de': "Shot Air"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec vrille",
				'de-de': "Drill Peck"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276200,
				tcgplayer: 85397
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276200,
				tcgplayer: 85397
			},
		}
	]
}

export default card
