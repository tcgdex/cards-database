import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crobat",
		de: "Iksbat"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Golbat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Carry Off",
				de: "Wegtragen"
			},
			effect: {
				en: "Once during your turn (before you attack) you may flip a coin. If heads, look at your opponent's hand. If your opponent has and Baby Pokémon, Basic Pokémon, of Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Crobat is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Schau dir bei 'Kopf' die Karten auf der Hand deines Gegners an. Falls dein Gegner ein Baby-Pokémon, ein Basis-Pokémon oder eine Entwicklungskarte auf der Hand hat, wähle eine davon. Dein Gegner mischt die Karte in sein Deck. Diese Fähigkeit kann nicht verwendet werden, falls Iksbat von einem speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Cross",
				de: "Doppelspiel"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the defending Pokémon is now Confused and Poisoned.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu. Wenn beide 'Zahl' zeigen, ist das verteidigende Pokémon jetzt verwirrt und vergiftet."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275245,
		tcgplayer: 84484
	}
}

export default card
