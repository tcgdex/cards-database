import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Protection",
				fr: "Protection d'Énergie",
				de: "Energieschutz"
			},
			effect: {
				en: "Any damage done to Pupitar by attacks is reduced by 10 for each Energy attached to Pupitar (after applying Weakness and Resistance). You can't reduce more than 30 damage in this way.",
				fr: "Tous dégâts infligés à Ymphect par des attaques sont réduits de 10 pour chaque Énergie qui lui est attachée (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas réduire de plus de 30 dégâts de cette façon.",
				de: "Schaden, der Pupitar durch Angriffe zugefügt wird, wird für jede an Pupitar angelegte Energie um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Der Schaden kann auf diese Weise nicht um mehr als 30 Schadenspunkte reduziert werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc",
				de: "Zertrümmerer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Son corps est dur comme la pierre souterraine. Il file comme une fusée en expulsant des gaz."
	}
}

export default card
