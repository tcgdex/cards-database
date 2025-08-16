import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
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
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Vitality Cheer",
				fr: "Bravos Vivifiants",
				es: "Ovación Vital",
				it: "Incitamento Vitale",
				pt: "Torcida Vital",
				de: "Vitalitätsjubel"
			},
			effect: {
				en: "Your Pokémon-GX in play that evolve from Eevee get +60 HP. You can’t apply more than 1 Vitality Cheer Ability at a time.",
				fr: "Vos Pokémon-GX en jeu qui évoluent d’Évoli ont +60 PV. Vous ne pouvez pas utiliser plus d’un talent Bravos Vivifiants à la fois.",
				es: "Tus Pokémon-GX en juego que evolucionen de Eevee obtienen 60 PS más. No puedes aplicar más de 1 habilidad Ovación Vital a la vez.",
				it: "I tuoi Pokémon-GX in gioco che si evolvono da Eevee hanno 60 PS in più. Può essere applicata solo un’abilità Incitamento Vitale alla volta.",
				pt: "Seus Pokémon-GX em jogo que evoluam de Eevee recebem 60 PS a mais. Você não pode usar mais de 1 Habilidade Torcida Vital por vez.",
				de: "Deine Pokémon-GX im Spiel, die sich aus Evoli entwickeln, erhalten 60 KP mehr. Du kannst immer nur jeweils 1 Fähigkeit Vitalitätsjubel einsetzen."
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
				en: "Refreshing Rain",
				fr: "Ondée Rafraîchissante",
				es: "Lluvia Refrescante",
				it: "Rinfrescapioggia",
				pt: "Chuva Refrescante",
				de: "Erquicklicher Regen"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
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

	thirdParty: {
		cardmarket: 407859,
		tcgplayer: 201218
	}
}

export default card
