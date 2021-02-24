import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Dome Fossil",
		fr: "Fossile Dôme",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ancient Guidance",
				fr: "Conseils ancestraux",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Kabuto is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Kabuto est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-attaque",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
