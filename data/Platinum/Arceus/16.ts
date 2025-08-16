import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gengar",
		de: "Gengar"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Curse",
				de: "Fluch"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another of your opponent's Pokémon. This power can't be used if Gengar is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 Pokémon deines Gegners entfernen und auf 1 anderes Pokémon deines Gegners legen. Diese Poké-Power kann nicht benutzt werden, wenn Gengar von einem Speziellen Zustand betroffen ist."
			},
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
				en: "Shadow Skip",
				de: "Schattensprung"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may switch Gengar with 1 of your Benched Pokémon.",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Du kannst Gengar gegen 1 Pokémon auf deiner Bank austauschen."
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

	thirdParty: {
		cardmarket: 278888,
		tcgplayer: 85677
	}
}

export default card
