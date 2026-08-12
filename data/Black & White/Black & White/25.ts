import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 120,

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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				de: "Feuerzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
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
				en: "Thrash",
				fr: "Mania",
				de: "Fuchtler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei „Zahl“ fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 70,

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
		en: "When weakened in battle, it transforms into a stone statue, then it sharpens its mind and fights on mentally.",
		de: "Schwächt man es im Kampf, wird es reglos wie ein Stein und horcht in sich hinein, um mit der Kraft seines Geistes zu kämpfen."
	},

	thirdParty: {
		cardmarket: 279763,
		tcgplayer: 84713
	}
}

export default card
