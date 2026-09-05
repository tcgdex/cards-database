import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Jolteon",
		fr: "Voltali lumineux",
		de: "Helles Blitza"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [19, 175],

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
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
				"Lightning",
			],
			name: {
				en: "Pulse Guard",
				fr: "Pulsation protectrice",
				de: "Aufpassimpuls"
			},
			effect: {
				en: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, si Voltali lumineux se voit infliger 30 dégâts ou plus (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tous les autres effets dus à des attaques subsistent.)",
				de: "Immer wenn im nächsten Zug deines Gegners Helles Blitza (nach der Verrechnung von Schwäche und Resistenz) 30 oder mehr Schadenspunkte zugefügt werden, verhindere diesen Schaden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Needle",
				fr: "Pic-éclair",
				de: "Donnernadel"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf drei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu. Wenn du zweimal oder öfter „Kopf“ wirfst, ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		en: "It can collect the ambient electrical energy in its cells and expel it in massive bursts.",
		fr: "Il peut stocker l'énergie électrique ambiante dans ses cellules et l'expulser sous forme d'explosions massives.",
		de: "Es kann die elektrische Energie seiner Umgebung in seinen Zellen speichern und sie dann in massiven Entladungen wieder abgeben."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274700,
				tcgplayer: 86741
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274700,
				tcgplayer: 86741
			}
		}
	]
}

export default card
