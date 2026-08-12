import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
		de: "Kiesling"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				de: "Kopfnuss"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crash",
				fr: "Grosse Gamelle",
				de: "Einstürzer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei „Zahl“ fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
		de: "Energie, die ungehindert aus seinem Körper austrat, hat sich an ihm zu orangefarbenen Kristallen verfestigt."
	},

	thirdParty: {
		cardmarket: 280016,
		tcgplayer: 83934
	}
}

export default card
