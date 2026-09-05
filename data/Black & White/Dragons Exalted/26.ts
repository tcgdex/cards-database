import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		de: "Wailmer"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Cannon",
				fr: "Canon à O",
				de: "Aquakanone"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Water attachées à ce Pokémon.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten {W}-Energien zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague Géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "This Pokémon can't use Giant Wave during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Vague Géante pendant votre prochain tour.",
				de: "Dieses Pokémon kann während deines nächsten Zuges Riesenwelle nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "The biggest of all Pokémon. It can dive to a depth of almost 10,000 feet on only one breath.",
		de: "Das größte Pokémon. Es kann mit nur einem Atemzug in Tiefen bis 3 000 Meter tauchen."
	},

	thirdParty: {
		cardmarket: 280465,
		tcgplayer: 90462
	}
}

export default card
