import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Smeargle",
		de: "Farbeagle"
	},

	illustrator: "Midori Harada",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Portrait",
				de: "Porträt"
			},
			effect: {
				en: "Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent's hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can't be used if Smeargle is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir, falls Farbeagle dein Aktives Pokémon ist, die Handkarten deines Gegners anschauen. Wenn du das machst, wähle 1 Unterstützerkarte, die du dort gefunden hast, und nutze den Effekt der Unterstützerkarte als Effekt dieser Poké-Power. Diese Poké-Power kann nicht benutzt werden, wenn Farbeagle von einem Speziellen Zustand betroffen ist."
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
				en: "Tail Rap",
				de: "Schweifklopfen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279664,
		tcgplayer: 89357
	}
}

export default card
