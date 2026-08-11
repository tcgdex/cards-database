import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		549,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Petilil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lead",
				'fr-fr': "Mentor",
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dream Dance",
				'fr-fr': "Danse-Rêve",
			},
			effect: {
				'en-us': "Both this Pokémon and the Defending Pokémon are now Asleep.",
				'fr-fr': "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "Even veteran Trainers face a challenge in getting its beautiful flower to bloom. This Pokémon is popular with celebrities.",
	},
}

export default card
