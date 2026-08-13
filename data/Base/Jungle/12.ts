import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		it: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		it: "Eevee",
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
				it: "Attacco Rapido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				it: "Lancia una moneta. Se esce testa questo attacco infligge 10 danni più altri 20 danni, se esce croce questo attacco infligge 10 danni.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				it: "Pistola ad Acqua",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Vaporeon but not used to pay for this attack's Energy cost. Extra Energy after the 2nd doesn't count.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Aquali en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				it: "Infligge 30 danni, più altri 10 danni per ogni energia Acqua assegnata a Vaporeon che non viene usata per pagare il costo di Energia di questo attacco. Non puoi aggiungere, in questo modo, più di 20 danni.",
				de: "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Aquana abgelegte {W}-Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen."
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


	description: {
		en: "Lives close to water. Its long tail is ridged with a fin that is often mistaken for a mermaid's.",
		fr: "Il vit au bord de l'eau. Sa queue lui donne l'apparence d'une sirène.",
		it: "Vive vicino all'acqua. La sua lunga coda termina con una pinna e per questo spesso viene scambiata per quella di una sirena.",
		de: "Lebt in Ufernähe. Sein langer Schwanz hat eine Flosse, die oft mit der einer Meeresjungfrau verwechselt wird."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273809,
				tcgplayer: 45123
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273809,
				tcgplayer: 45123
			}
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		}
	],
}

export default card
