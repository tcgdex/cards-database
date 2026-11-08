import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plasma Search",
				'fr-fr': "Recherche Plasma",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it into your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte de la Team Plasma dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser une capacité spéciale du même nom pendant votre tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'Esprit",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
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

	retreat: 2,




	description: {
		'en-us': "With four linked brains, it's more intelligent than a supercomputer, and it uses calculations to analyze foes.",
	},
}

export default card
