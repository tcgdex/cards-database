import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Victini-EX",
		fr: "Victini-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 110,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Turbo Energize",
				fr: "Énergisant Spontané",
			},
			effect: {
				en: "Search your deck for 2 basic Energy cards and attach them to your Benched Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Cherchez 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Intensifying Burn",
				fr: "Rage Brûlante",
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
