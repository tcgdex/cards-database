import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'de-de': "Sonnfel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [338],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Heal Block",
				'fr-fr': "Anti-Soin",
				'de-de': "Heilblockade"
			},
			effect: {
				'en-us': "If you have Lunatone in play, damage counters can't be removed from any Pokémon (both yours and your opponent's). (Damage counters can still be moved.)",
				'fr-fr': "Si vous disposez de Seleroc en jeu, aucun marqueur de dégât ne peut être retiré aux Pokémon (les vôtres et ceux de votre adversaire). (Vous pouvez néanmoins déplacer les marqueurs de dégât.)",
				'de-de': "Wenn du Lunastein im Spiel hast, können keine Schadensmarken von Pokémon entfernt werden (deinen und denen deines Gegners). (Schadensmarken können jedoch weiterhin verschoben werden.)"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sun Flash",
				'fr-fr': "Éblouissement solaire",
				'de-de': "Sonnenblitz"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it rotates itself, it gives off light similar to the sun, thus blinding its foes."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89430,
				cardmarket: 279539
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279539,
				tcgplayer: 89430
			}
		},
	],

}

export default card
