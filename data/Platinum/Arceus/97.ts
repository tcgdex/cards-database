import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gengar LV. X",
		de: "Gengar"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	
	hp: 140,

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Level-Down",
				de: "Level-Down"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of your opponent's Pokémon LV.X. Remove the Level-Up card from that Pokémon and have your opponent shuffle that card into his or her deck. This power can't be used if Gengar is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon LV.X deines Gegners wählen. Entferne die Level-Up-Karte von diesem Pokémon, danach mischt dein Gegner sie in sein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Gengar von einem speziellen Zustand betroffen ist."
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
				en: "Compound Pain",
				de: "Schmerzverbund"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon that already has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
