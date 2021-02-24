import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},
	illustrator: undefined,
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evasion Jutsu",
				fr: "Jutsu Évasion",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Furious Shurikens",
				fr: "Shuriken Furieux",
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
