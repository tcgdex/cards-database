import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'de-de': "Nidoking",
		'it-it': "Nidoking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'it-it': "Nidorino"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thrash",
				'fr-fr': "Mania",
				'de-de': "Prügel",
				'it-it': "Colpo"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Nidoking s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei Zahl fügt dieser Angriff 30 Schadenspunkte zu, und Nidoking fügt sich selbst 10 Schadenspunkte zu.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni più altri 10 danni; se esce croce, questo attacco infligge 30 danni e Nidoking si infligge 10 danni."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik",
				'de-de': "Toxin",
				'it-it': "Tossina"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Il subit maintenant 20 dégâts Poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
				'de-de': "Das verteidigende Pkemon ist vergiftet. Es erleidet 20 Vergiftunsschadenspunkte anstatt 10 nach dem Zug jedes Spielers (selbst wenn esbereits vergiuftet war)",
				'it-it': "Il Pokémon difensore è avvelenato. Riceve 20 danni Veleno invece di 10 dopo il turno di ciascun giocatore (anche se era già Avvelenato)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Uses its powerful tail in battle to smash, constrict, then break its prey's bones.",
		'fr-fr': "Sa queue est une arme redoutable, il s'en sert pour attraper sa proie et lui broyer les os.",
		'it-it': "In combattimento, usa la sua potente coda per colpire, stritolare e poi spezzare le ossa della sua preda. LIV 48 N.34"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273706,
				tcgplayer: 42351
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107006
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107006
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	]
}

export default card
