import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Mewtwo",
		de: "Mewtu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
				fr: "Hypnose",
				de: "Hypnose"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
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
				en: "Conduction",
				fr: "Psyko",
				de: "Psycho"
			},
			effect: {
				en: "Discard all Lightning Energy cards attached to Lanturn. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus zusätzlich 10 Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87418,
				cardmarket: 274895
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
