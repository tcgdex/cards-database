import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [334],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Midnight Eyes",
				'fr-fr': "Yeux de minuit",
				'de-de': "Midnight Eyes"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Perish Song",
				'fr-fr': "Requiem",
				'de-de': "Perish Song"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi et que l'attaque Yeux de minuit lui a infligé des dégâts lors de votre tour précédent, il est mis K.O.",
				'de-de': "If the Defending Pokémo is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healing Song",
				'fr-fr': "Chanson guérisseuse",
				'de-de': "Healing Song"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				'de-de': "Remove 1 damage counter from each of your Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83517,
				cardmarket: 278439
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278439,
				tcgplayer: 83517
			}
		}
	],

}

export default card
