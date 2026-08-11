import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'de-de': "Forstellka"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Shot",
				'fr-fr': "Miroi-Tir",
				'de-de': "Spiegelsalve"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Everyone Explode Now",
				'fr-fr': "Explosion générale",
				'de-de': "Alle explodieren jetzt"
			},
			effect: {
				'en-us': "Does 30 damage times the number of Pineco and Forretress you have in play. This attack does 30 damage to each of your Pineco and Forretress in play.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre de et de Foretress que vous avez en jeu. Cette attaque inflige 30 dégâts à chacun de vos Pomdepik et Foretress en jeu.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte für jedes Tannza und Forstellka, das du im Spiel hast, zu. Dieser Angriff fügt jedem Tannza und Forstellka, das du im Spiel hast, 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85553,
				cardmarket: 279648
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85553,
				cardmarket: 279648
			},
		},
	],

}

export default card
