import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		de: "Gelatroppo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Freeze",
				fr: "Double Gelure",
				de: "Doppelfroster"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads. If either of them is heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu. Wenn eine oder beide Münzen „Kopf“ zeigen, ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
				de: "Eisesodem"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If both heads get angry simultaneously, this Pokémon expels a blizzard, burying everything in snow.",
		de: "Bringt man beide Köpfe in Rage, stößt sein Horn heftige Eisböen aus, und alles in seiner Umgebung versinkt in Schnee."
	},

	thirdParty: {
		cardmarket: 280152,
		tcgplayer: 90273
	}
}

export default card
