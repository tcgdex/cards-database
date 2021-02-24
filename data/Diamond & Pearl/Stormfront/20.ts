import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Machamp",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Take Out",
				fr: "Éliminer",
			},
			effect: {
				en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is Knocked Out instead of damaged by this attack.",
				fr: "Si le Pokémon  Défenseur n'est pas un Pokémon Évolué, ce Pokémon est mis K.O par cette attaque.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				fr: "Poing ouragan",
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each damage counter on Machamp.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Mackogneur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
