import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
		'de-de': "Kabuto"
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
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Dome Fossil",
		'fr-fr': "Fossile Dôme",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Ancient Guidance",
				'fr-fr': "Conseils ancestraux",
				'de-de': "Urzeitliche Unterweisung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Kabuto is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Kabuto est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei 'Kopf' durchsuche dein Deck nach 1 Helixfossil-, Domfossli- oder Altbernstein-Karte und lege sie auf deine Bank. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Kabuto von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Coquill-attaque",
				'de-de': "Muschelangriff"
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

	description: {
		'en-us': "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
	},

	thirdParty: {
		cardmarket: 278055,
		tcgplayer: 86386
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
