import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heal Block",
				fr: "Anti-Soin",
				de: "Heilblockade"
			},
			effect: {
				en: "If you have Lunatone in play, damage counters can’t be removed from any Pokémon (both yours and your opponent’s). (Damage counters can still be moved.)",
				fr: "Si vous disposez de Seleroc en jeu, aucun marqueur de dégât ne peut être retiré aux Pokémon (les vôtres et ceux de votre adversaire). (Vous pouvez néanmoins déplacer les marqueurs de dégât.)",
				de: "Wenn du Lunastein im Spiel hast, können keine Schadensmarken von Pokémon entfernt werden (deinen und denen deines Gegners). (Schadensmarken können jedoch weiterhin verschoben werden.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sun Flash",
				fr: "Éblouissement solaire",
				de: "Sonnenblitz"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
		en: "When it rotates itself, it gives off light similar to the sun, thus blinding its foes."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279539,
		tcgplayer: 89430
	}
}

export default card
