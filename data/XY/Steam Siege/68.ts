import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "M Steelix-EX",
		fr: "M-Steelix-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 240,
	types: [
		"Metal",
		"Fightning",
	],
	evolveFrom: {
		en: "Steelix-EX",
		fr: "Steelix-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Canyon Axe",
				fr: "Tranche Canyon",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 160,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
