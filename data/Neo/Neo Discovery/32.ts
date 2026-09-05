import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [95, 249],

	dexId: [
		197,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pursuit",
				fr: "Poursuite",
				de: "Verfolgung"
			},
			effect: {
				en: "During your opponent's next turn, if the Defending Pokémon tries to retreat, do 10 damage to it. (Don't apply Weakness and Resistance.)",
				fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie de battre en retraite, infligez-lui 10 dégâts. (N'appliquez pas la Faiblesse et la Résistance.)",
				de: "Wenn während des nächsten Zugs deines Gegners das verteidigende Pokémon versucht, sich zurückzuziehen, fügt ihm 10 Schadenspunkte zu. (Wende Schwäche und Resistenz nicht an.)"
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "When agitated, this Pokémon protects itself by spraying poisonous sweat from its pores.",
		fr: "Quand il est énervé, ce Pokémon se protège avec une sueur empoisonnée émise par ses pores.",
		de: "Wenn es beunruhigt ist, schützt es sich, indem es Giftschweiß aus seinem Körper ausströmt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90142
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90142
			}
		}
	]
}

export default card

