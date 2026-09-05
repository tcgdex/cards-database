import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
		de: "Sharfax"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
				de: "Guillotine"
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stunning Uppercut",
				fr: "Uppercut Assommant",
				de: "Betäubungsschlag"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Paralyzed. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est maintenant Paralysé. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Zeigen beide „Kopf“, ist das Verteidigende Pokémon jetzt paralysiert. Wenn beide Münzen „Zahl“ zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

		},
	],

	retreat: 3,

	description: {
		en: "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
		de: "Wenn es mit seinen robusten Hauern Stahl durchbohrt, bleiben diese unversehrt. Es ist von einem festen Panzer umgeben."
	},

	thirdParty: {
		cardmarket: 280417,
		tcgplayer: 86033
	}
}

export default card
