import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		de: "Krebutack"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes empoisonnées",
				de: "Giftkrallen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Reißer"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 60 dégâts.",
				de: "Wenn auf dem Verteidigenden Pokémon mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 84462,
		cardmarket: 275880
	}
}

export default card
