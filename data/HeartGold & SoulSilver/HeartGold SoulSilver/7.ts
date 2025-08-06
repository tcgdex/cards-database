import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "TOKIYA",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Roast Reveal",
				fr: "Rôtir",
				de: "Bratblick"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards. This power can’t be used if Ninetales is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez vous défausser d’une carte Énergie Fire. Dans ce cas, piochez 3 cartes. Ce pouvoir ne peut pas être utilisé si Feunard est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 -Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten. Diese Poké-Power kann nicht benutzt werden, wenn Vulnona von einem Speziellen Zustand betroffen ist."
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
				en: "Will-o’-the-wisp",
				fr: "Feu follet",
				de: "Irrlicht"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278979,
		tcgplayer: 87774
	}
}

export default card
