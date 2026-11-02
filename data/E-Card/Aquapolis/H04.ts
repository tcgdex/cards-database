import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [184],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bubble Turn",
				fr: "Tourne-bulle",
				de: "Blubbdrehung"
			},
			effect: {
				en: "Once during your turn (before your attack), if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Azumarill est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, renvoyez Azumarill et toutes les cartes qui y sont attachées dans votre main.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Azumarill auf deiner Bank ist, eine Münze werfen. Bringe bei „Kopf“ Azumarill und alle daran angelegten Karten auf deine Hand zurück."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique",
				de: "Wassersonar"
			},
			effect: {
				en: "Don't apply Resistance.",
				fr: "N'appliquez pas la Résistance.",
				de: "Wende Resistenz nicht an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83681,
				cardmarket: 275076
			}
		},
	]
}

export default card
