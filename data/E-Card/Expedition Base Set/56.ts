import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Mewtwo",
		de: "Mewtu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Hypnose",
				de: "Hypnose"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Pupitar does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei 'Kopf' schläft das Verteidigende Pokémon jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psycho"
			},
			effect: {
				en: "This attack does 20 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus zusätzlich 10 Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energiekarte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87420,
				cardmarket: 274894
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
