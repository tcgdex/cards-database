import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
		de: "Kabuto"
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
				de: "Urzeitliche Unterweisung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Kabuto is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Kabuto est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei 'Kopf' durchsuche dein Deck nach 1 Helixfossil-, Domfossli- oder Altbernstein-Karte und lege sie auf deine Bank. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Kabuto von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-attaque",
				de: "Muschelangriff"
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
