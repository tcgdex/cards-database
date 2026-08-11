import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'de-de': "Raikou"
	},

	illustrator: "Noriko Hotta",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 90,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extreme Speed",
				'fr-fr': "Vitesse extrême",
				'de-de': "Turbotempo"
			},
			effect: {
				'en-us': "Raikou's Retreat Cost is Colorless less for each Lightning Energy attached to Raikou.",
				'fr-fr': "Le Coût de retraite de Raikou est Colorless de moins pour chaque Énergie Lightning attachée à Raikou",
				'de-de': "Die Rückzugskosten von Raikou verringern sich für jede an Raikou angelegte -Energie um ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Raging Thunder",
				'fr-fr': "Tonnerre déchaîné",
				'de-de': "Tosender Donner"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your Pokémon and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Inflige 20 dégâts à 1 de vos Pokémon. N’appliquez ni la Faiblesse ni la Résistance à ces dégâts.",
				'de-de': "Dieser Angriff fügt einem deiner Pokémon 20 Schadenspunkte zu; wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "A Pokémon that races across the land while barking a cry that sounds like crashing thunder.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88536,
				cardmarket: 279634
			},
		},
	],

}

export default card
