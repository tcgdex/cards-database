import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Salamence",
		de: "Brutalanda"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],
	
	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Shelgon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Top Accelerator",
				de: "Spitzenbeschleuniger"
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If that card isn't a basic Energy card, discard it. This power can't be used if Salamence is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die oberste Karte deines Decks aufdecken. Wenn diese Karte eine Basis-Energiekarte ist, lege sie an 1 deiner Pokémon an. Wenn diese Karte keine Basis-Energiekarte ist, lege sie auf deinen Ablagestapel. Diese Poké-Power kann nicht benutzt werden, wenn Brutalanda von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Shoot Through",
				de: "Durchschießen"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				de: "Drachenklaue"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278880,
		tcgplayer: 88899
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
