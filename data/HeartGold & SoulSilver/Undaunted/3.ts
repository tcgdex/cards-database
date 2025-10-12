import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Mirror Shot",
				fr: "Miroi-Tir",
				de: "Spiegelsalve"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
				en: "Everyone Explode Now",
				fr: "Explosion générale",
				de: "Alle explodieren jetzt"
			},
			effect: {
				en: "Does 30 damage times the number of Pineco and Forretress you have in play. This attack does 30 damage to each of your Pineco and Forretress in play.",
				fr: "Inflige 30 dégâts multipliés par le nombre de Pomdepik et de Foretress que vous avez en jeu. Cette attaque inflige 30 dégâts à chacun de vos Pomdepik et Foretress en jeu.",
				de: "Dieser Angriff fügt 30 Schadenspunkte für jedes Tannza und Forstellka, das du im Spiel hast, zu. Dieser Angriff fügt jedem Tannza und Forstellka, das du im Spiel hast, 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		en: "Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279256,
		tcgplayer: 85551
	}
}

export default card
