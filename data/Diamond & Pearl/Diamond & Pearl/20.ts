import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
		de: "Bidifas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
				de: "Ruhe"
			},
			effect: {
				en: "Remove all Special Conditions and 4 damage counters from Bibarel. Bibarel is now Asleep.",
				fr: "Retirez à Castorno tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Castorno est maintenant Endormi.",
				de: "Entferne alle Speziellen Zustände und 4 Schadensmarken von Bidifas. Bidifas schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Bibarel does 10 damage to itself.",
				fr: "Castorno s'inflige 10 dégâts.",
				de: "Bidifas fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il construit des barrages de boue et d'écorce le long des fleuves. C'est un ouvrier de renom."
	}
}

export default card
