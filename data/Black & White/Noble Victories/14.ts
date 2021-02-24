import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Victory Star",
				fr: "Victorieux",
			},
			effect: {
				en: "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
				fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser la capacité spéciale Victorieux plus d'une fois par tour.",
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
				en: "Stored Power",
				fr: "Force Ajoutée",
			},
			effect: {
				en: "Move all Energy attached to this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez toutes les Énergies attachées à ce Pokémon vers 1 de vos Pokémon de Banc.",
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



}

export default card
