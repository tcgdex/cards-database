import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		de: "Nidoking",
		it: "Nidoking"
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
		en: "Nidorino",
		it: "Nidorino"
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
				en: "Thrash",
				fr: "Mania",
				de: "Prügel",
				it: "Colpo"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Nidoking s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei Zahl fügt dieser Angriff 30 Schadenspunkte zu, und Nidoking fügt sich selbst 10 Schadenspunkte zu.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni più altri 10 danni; se esce croce, questo attacco infligge 30 danni e Nidoking si infligge 10 danni."
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
				en: "Toxic",
				fr: "Toxik",
				de: "Toxin",
				it: "Tossina"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Il subit maintenant 20 dégâts Poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
				de: "Das verteidigende Pkemon ist vergiftet. Es erleidet 20 Vergiftunsschadenspunkte anstatt 10 nach dem Zug jedes Spielers (selbst wenn esbereits vergiuftet war)",
				it: "Il Pokémon difensore è avvelenato. Riceve 20 danni Veleno invece di 10 dopo il turno di ciascun giocatore (anche se era già Avvelenato)."
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

	description: {
		fr: "Sa queue est une arme redoutable, il s'en sert pour attraper sa proie et lui broyer les os.",
		it: "In combattimento, usa la sua potente coda per colpire, stritolare e poi spezzare le ossa della sua preda. LIV 48 N.34"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273706,
		tcgplayer: 42351
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/013.ts"
		}
	]
}

export default card
