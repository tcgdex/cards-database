import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Ninetales",
		de: "Vulnona"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
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
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Roast Reveal",
				de: "Bratblick"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards. This power can't be used if Ninetales is affected by a Special Condition.",
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
				en: "Will-o'-the-wisp",
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





}

export default card
