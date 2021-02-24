import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Hydreigon BREAK",
		fr: "Trioxhydre TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 190,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Calamity Blast",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon. This attack does 50 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 150,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Explo-Calamité",
			},
			effect: {
				fr: "Défaussez 3 Énergies attachées à ce Pokémon. Cette attaque inflige 50 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
