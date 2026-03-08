import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Active Volcano",
				fr: "Volcan actif",
				de: "Aktiver Vulkan"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard the top card of your deck. If that card is a Fire Energy card, attach it to Slugma. This power can’t be used if Slugma is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser la carte du dessus de votre deck. S’il s’agit d’une carte Énergie Fire, attachez-la à Limagma. Ce pouvoir ne peut pas être utilisé si Limagma est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn es sich um eine -Energiekarte handelt, lege sie an Schneckmag an. Diese Poké-Power kann nicht benutzt werden, wenn Schneckmag von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A common sight in volcanic areas, it slowly slithers around in a constant search for warm places."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279320,
		tcgplayer: 89346
	}
}

export default card
