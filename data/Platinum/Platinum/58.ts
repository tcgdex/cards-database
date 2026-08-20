import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
		de: "Octillery"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [224],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
		de: "Remoraid"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Water Vein",
				fr: "Filon d'eau",
				de: "Wasserader"
			},
			effect: {
				en: "Reveal the top 5 cards of your deck. Flip a coin for each Energy card you find there. This attack does 50 damage times the number of heads. Shuffle the revealed cards back into your deck.",
				fr: "Retournez les 5 cartes du dessus de votre deck. Lancez une pièce pour chaque carte Énergie que vous y trouvez. Cette attaque inflige 50 dégâts multipliés par le nombre de faces. Mélangez les cartes retournées à votre deck.",
				de: "Decke die obersten 5 Karten deines Decks auf. Wirf für jede Energiekarte, die auf diese Weise aufgedeckt wurde, 1 Münze. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu. Mische die aufgedeckten Karten zurück in dein Deck."
			},
			damage: "50×",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Octazooka",
				fr: "Octazooka",
				de: "Octazooka"
			},
			effect: {
				en: "Any time the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (If the Defending Pokémon is no longer your opponent's Active Pokémon, this effect ends.)",
				fr: "Chaque fois que le Pokémon Défenseur essaye d'attaquer, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet. (Si le Pokémon Défenseur n'est plus le Pokémon Actif de votre adversaire, cet effet se termine.)",
				de: "Immer wenn das Verteidigende Pokémon angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen. (Dieser Effekt endet, sobald das Verteidigende Pokémon nicht mehr das Aktive Pokémon deines Gegners ist.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "It loves to lurk inside holes in rocks. It sometimes sprays ink on prey by sticking out only its mouth.",
		de: "Es lauert gerne in den Löchern von Felsen, um vorbeischwimmende Beute mit Tinte zu bespritzen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87833,
				cardmarket: 278479
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278479,
				tcgplayer: 87833
			}
		}
	],

}

export default card
