import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Venomoth",
		de: "Omot"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venonat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Dust",
				de: "Heilender Staub"
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.",
				de: "Wirf 2 Münzen. Entferne für jeden geworfenen \"Kopf\" eine Schadensmarke von jedem deiner Pokémon. Hat ein Pokémon weniger Schadensmarken als du \"Kopf\" geworfen hast, entferne alle von ihm."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Miracle Powder",
				de: "Wunderpulver"
			},

			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" einen speziellen Zustand (Schlaf, verbrannt, verwirrt, gelähmt oder vergiftet). Das verteidigende Pokémon ist jetzt von diesem Spezielen Zustand betroffen."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275369,
		tcgplayer: 90300
	}
}

export default card
