import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		630,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bone Drop",
				fr: "Chute Osseuse",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Pokémon that has an Ability. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire ayant un talent. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
