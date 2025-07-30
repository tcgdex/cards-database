import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
		de: "Noctuh"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Night Sight",
				fr: "Vision de nuit",
				de: "Nachtblick"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can’t be used if Noctowl is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Noarfang est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Karte ziehen. Diese Poké-Power kann nicht benutzt werden, wenn Noctuh von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
				de: "Sondersensor"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278980
	}
}

export default card
