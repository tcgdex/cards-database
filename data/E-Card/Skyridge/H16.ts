import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magcargo",
		de: "Magcargo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eruption",
				de: "Ausbruch"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Energy card discarded in this way.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte -Energiekarte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				de: "Feuerstrom"
			},
			effect: {
				en: "Discard a Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokémon, this attack does 10 damage to each of them. (Don't apply Weakness or Resistance for Benched Pokémon.)",
				de: "Lege eine an Magcargo angelegte -Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Wenn dein Gegner über Pokémon auf der Bank verfügt, fügt dieser Angriff jedem von ihnen 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
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

	thirdParty: {
		cardmarket: 275234,
		tcgplayer: 87008
	}
}

export default card
