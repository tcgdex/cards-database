import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Heledelle",
		de: "Schwalboss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Drive Off",
				fr: "Déroute",
				de: "Wegtreiben"
			},
			effect: {
				en: "Once during your turn (before your attack), if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), et si Heledelle est votre Pokémon Actif, vous pouvez échanger un des Pokémon Défenseur par un des Pokémon du Banc de votre adversaire. Votre adversaire peut choisir quel Pokémon de son Banc sera le remplaçant. Ce pouvoir ne peut être utilisé si Heledelle est affecté par un État Spécial.",
				de: "Einmal in deinem Zug (vor deinem Angriff), wenn Schwalboss dein Aktives Pokémon ist, kannst du 1 Verteidigendes Pokémon mit einem gegnerischen Pokémon (dieses wählt dein Gegner aus) auf der Bank austauschen. Diese Poké-Power kann nicht verwendet werden, falls Schwalboss von einem Speziellen Zustand betroffen ist."
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
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
			},

			damage: 30,

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
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 275694,
		tcgplayer: 89688
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		}
	]
}

export default card
