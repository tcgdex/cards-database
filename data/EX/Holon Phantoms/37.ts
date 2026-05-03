import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Chimecho δ",
		fr: "Eoko δ",
		de: "Palimpalim"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Support",
				fr: "Support Delta",
				de: "Delta-Unterstützung"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Supporter card with Holon in its name in play, you may search your discard pile for a basic Energy card or a δ Rainbow Energy card, show it to your opponent, and put it into your hand. This power can't be used if Chimecho is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez une carte Supporter dont le nom comporte Holon en jeu, vous pouvez choisir dans votre pile de défausse une carte Énergie de base ou une carte Énergie Multicolore δ. Montrez-la à votre adversaire et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Eoko est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du eine Unterstützerkarte mit \"Holon\" im Namen im Spiel hast, deinen Ablagestapel nach einer Basis-Energiekarte oder einer δ Regenbogen-Energiekarte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Diese Poké-Power kann nicht benutzt werden, wenn Palimpalim von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
				de: "Haken"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277007
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
