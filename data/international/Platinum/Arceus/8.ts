import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'de-de': "Brutalanda"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [373],
	
	hp: 140,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Shelgon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Top Accelerator",
				'de-de': "Spitzenbeschleuniger"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If that card isn't a basic Energy card, discard it. This power can't be used if Salamence is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du die oberste Karte deines Decks aufdecken. Wenn diese Karte eine Basis-Energiekarte ist, lege sie an 1 deiner Pokémon an. Wenn diese Karte keine Basis-Energiekarte ist, lege sie auf deinen Ablagestapel. Diese Poké-Power kann nicht benutzt werden, wenn Brutalanda von einem Speziellen Zustand betroffen ist."
			}
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
				'en-us': "Shoot Through",
				'de-de': "Durchschießen"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Dragon Claw",
				'de-de': "Drachenklaue"
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88899,
				cardmarket: 278880
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278880,
				tcgplayer: 88899
			}
		},
	],

}

export default card
