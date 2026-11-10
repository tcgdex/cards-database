import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		it: "Weezing",
		de: "Smogmog"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
		it: "Koffing",
		de: "Smogon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],

			name: {
				en: "Smog",
				fr: "Purédpois",
				it: "Smog",
				de: "Smog"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				it: "Autodistruzione",
				de: "Finale"
			},
			effect: {
				en: "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Weezing does 60 damage to itself.",
				fr: "Inflige 10 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Smogogo s'inflige 60 dégâts.",
				it: "Infligge 10 danni a ogni Pokémon nella Panchina di entrambi i giocatori (non applicare Debolezza e Resistenza ai Pokémon in Panchina). Weezing si infligge 60 danni.",
				de: "Fügt jedem Pokémon auf der Bank eines jeden Spielers 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Smogmog fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Where two kinds of poison gases meet, two Koffings can fuse into a Weezing over many years.",
		fr: "Deux Smogo peuvent se combiner en un Smogogo en combinant leurs gaz.",
		it: "Quando si incontrano due diversi gas velenosi, due Koffing possono fondersi e trasformarsi per molti anni in un Weezing.",
		de: "Wo zwei Arten von Giftwolken aufeinandertreffen, vereinigen sich über Jahre hinweg zwei Smogons in ein Smogmog."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273906,
				tcgplayer: 44447
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273906,
				tcgplayer: 44447
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273906,
				tcgplayer: 44447
			}
		},
	],
}

export default card
