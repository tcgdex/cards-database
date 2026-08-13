import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Pupitar",
		fr: "Ymphect obscur",
		de: "Dunkles Pupitar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		de: "Larvitar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rock Tackle",
				fr: "Plaquage roc",
				de: "Steintackle"
			},
			effect: {
				en: "Dark Pupitar does 10 damage to itself. Dark Pupitar can't use this attack during your next turn.",
				fr: "Ymphect obscur s'inflige 10 dégâts. Ymphect obscur ne peut pas utiliser cette attaque pendant votre prochain tour.",
				de: "Dunkles Pupitar fügt sich selber 10 Schadenspunkte zu. Dunkles Pupitar kann in deinem nächsten Zug diesen Angriff nicht verwenden."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosive Evolution",
				fr: "Évolution explosive",
				de: "Explosive Entwicklung"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Then, search your deck for an Evolution card named Dark Tyranitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon de votre adversaire. N'appliquez ni la Faiblesse, ni la Résistance. Cherchez ensuite dans votre deck une carte Évolution appelée Tyranocif obscur et placez-la sur Ymphect obscur. (Cela revient à faire évoluer Ymphect obscur.) Mélangez ensuite votre deck.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff jedem Pokémon deines Gegners 10 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an. Durchsuche dann dein Deck nach einer Entwicklungskarte „Dunkles Despotar“ und lege diese auf Dunkles Pupitar. (Dies zählt als Entwickeln von Dunkles Pupitar.) Mische dein Deck nach."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It is encased within a hard shell, yet retains a great deal of mobility—a dangerous combination.",
		fr: "Il est protégé par une solide carapace, mais il garde une grande mobilité... Une combinaison dangereuse.",
		de: "Es ist in einem harten Panzer eingezwängt und hat trotzdem eine hohe Beweglichkeit - eine gefährliche Kombination."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274690,
				tcgplayer: 84642
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274690,
				tcgplayer: 84642
			}
		}
	]
}

export default card
