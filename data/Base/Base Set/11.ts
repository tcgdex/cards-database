import { Card } from '../../../interfaces'
import Set from '../Base Set'
import AsianCard from "../../../data-asia/PMCG/PMCG1/013.ts";

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		de: "Nidoking"
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
				de: "Prügel"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Nidoking s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei Zahl fügt dieser Angriff 30 Schadenspunkte zu, und Nidoking fügt sich selbst 10 Schadenspunkte zu."
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
				de: "Toxin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Il subit maintenant 20 dégâts Poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
				de: "Das verteidigende Pkemon ist vergiftet. Es erleidet 20 Vergiftunsschadenspunkte anstatt 10 nach dem Zug jedes Spielers (selbst wenn esbereits vergiuftet war)"
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
		fr: "Sa queue est une arme redoutable, il s'en sert pour attraper sa proie et lui broyer les os."
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
			card: AsianCard
		}
	]
}

export default card
