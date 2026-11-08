import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Vitality Cheer",
				'fr-fr': "Bravos Vivifiants",
				'es-es': "Ovación Vital",
				'it-it': "Incitamento Vitale",
				'pt-br': "Torcida Vital",
				'de-de': "Vitalitätsjubel"
			},
			effect: {
				'en-us': "Your Pokémon-GX in play that evolve from Eevee get +60 HP. You can’t apply more than 1 Vitality Cheer Ability at a time.",
				'fr-fr': "Vos Pokémon-GX en jeu qui évoluent d’Évoli ont +60 PV. Vous ne pouvez pas utiliser plus d’un talent Bravos Vivifiants à la fois.",
				'es-es': "Tus Pokémon-GX en juego que evolucionen de Eevee obtienen 60 PS más. No puedes aplicar más de 1 habilidad Ovación Vital a la vez.",
				'it-it': "I tuoi Pokémon-GX in gioco che si evolvono da Eevee hanno 60 PS in più. Può essere applicata solo un’abilità Incitamento Vitale alla volta.",
				'pt-br': "Seus Pokémon-GX em jogo que evoluam de Eevee recebem 60 PS a mais. Você não pode usar mais de 1 Habilidade Torcida Vital por vez.",
				'de-de': "Deine Pokémon-GX im Spiel, die sich aus Evoli entwickeln, erhalten 60 KP mehr. Du kannst immer nur jeweils 1 Fähigkeit Vitalitätsjubel einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Refreshing Rain",
				'fr-fr': "Ondée Rafraîchissante",
				'es-es': "Lluvia Refrescante",
				'it-it': "Rinfrescapioggia",
				'pt-br': "Chuva Refrescante",
				'de-de': "Erquicklicher Regen"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Clean, clear waters are its usual habitat. When it's about to be attacked by an invading enemy, it dives into the water to hide.",
	},

	thirdParty: {
		cardmarket: 407859,
		tcgplayer: 201218
	}
}

export default card
