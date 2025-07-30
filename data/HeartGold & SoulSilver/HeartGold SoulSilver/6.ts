import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		de: "Papungha"
	},

	illustrator: "sui",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mass Attack",
				fr: "Attaque en masse",
				de: "Massenangriff"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent’s).",
				fr: "Inflige 10 dégâts multiplié par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Pokémon im Spiel (deiner und deines Gegners) zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Guard",
				fr: "Feuille garde",
				de: "Floraschild"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Jumpluff by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Cotovol par des attaques pendant le prochain tour de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Papungha durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Once it catches the wind, it deftly controls its cotton-puff spores—it can even float around the world."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278978
	}
}

export default card
