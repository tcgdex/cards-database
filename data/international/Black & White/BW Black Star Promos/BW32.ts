import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Victory Star",
				'fr-fr': "Victorieux",
			},
			effect: {
				'en-us': "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
				'fr-fr': "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser la capacité spéciale Victorieux plus d'une fois par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Stored Power",
				'fr-fr': "Force Ajoutée",
			},
			effect: {
				'en-us': "Move all Energy attached to this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez toutes les Énergies attachées à ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},
}

export default card
