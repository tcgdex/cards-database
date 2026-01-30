import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		de: "Sumpex"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Echo Draw",
				fr: "Pioche renvoi",
				de: "Echo Zug"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Swampert is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Laggron est affecté par un État Spécial.",
				de: "Ein Mal während deines Zuges (vor deinem Angriff) kannst du 1 Karte ziehen. Diese Poké-Power kann nicht benutzt werden, wenn Sumpex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				fr: "Lance-pierre",
				de: "Steinschleuderer"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verringert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277108,
		tcgplayer: 89679
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
	]
}

export default card
