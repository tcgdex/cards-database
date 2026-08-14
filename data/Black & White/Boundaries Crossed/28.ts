import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
		de: "Flampion"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
				de: "Dauerrollen"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Counterpunch",
				fr: "Riposte Enragée",
				de: "Konterklatsche"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
				fr: "Si ce Pokémon a des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Wenn auf diesem Pokémon bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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

	retreat: 2,

	description: {
		en: "When one is injured in a fierce battle, it hardens into a stone-like form. Then it meditates and sharpens its mind.",
		de: "Nimmt es in einem heißen Kampf Schaden, wird es hart wie Stein und fällt in eine Trance, um seinen Verstand zu schärfen."
	},

	thirdParty: {
		cardmarket: 280615,
		tcgplayer: 84716
	}
}

export default card
