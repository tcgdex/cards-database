import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 110,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Curse",
				'de-de': "Fluch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another of your opponent's Pokémon. This power can't be used if Gengar is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 Pokémon deines Gegners entfernen und auf 1 anderes Pokémon deines Gegners legen. Diese Poké-Power kann nicht benutzt werden, wenn Gengar von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Skip",
				'de-de': "Schattensprung"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may switch Gengar with 1 of your Benched Pokémon.",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Du kannst Gengar gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	description: {
		'en-us': "The leer that floats in darkness belongs to a Gengar delighting in casting curses on people."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85677,
				cardmarket: 278888
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278888,
				tcgplayer: 85677
			}
		},
	],

	retreat: 0
}

export default card
