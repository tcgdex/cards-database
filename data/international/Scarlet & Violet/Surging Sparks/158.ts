import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		'en-us': "Maushold",
		'fr-fr': "Famignol",
		'es-es': "Maushold",
		'it-it': "Maushold",
		'pt-br': "Maushold",
		'de-de': "Famieps"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Familial March",
			'fr-fr': "Marche Familiale",
			'es-es': "Marcha Familiar",
			'it-it': "Marcia Familiare",
			'pt-br': "Marcha em Família",
			'de-de': "Familienmarsch"
		},

		effect: {
			'en-us': "Search your deck for up to 2 in any combination of Maushold and Maushold ex and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une combinaison d'un maximum de 2 Famignol et Famignol-ex, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja, en cualquier combinación, hasta 2 Maushold y Maushold ex y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Maushold e Maushold-ex in qualsiasi combinazione e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Maushold e Maushold ex no seu baralho em qualquer combinação e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 2 Famieps und Famieps-ex und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Incessant Incisors",
			'fr-fr': "Incisives Incessantes",
			'es-es': "Incisivos Incesantes",
			'it-it': "Incisivi Incessanti",
			'pt-br': "Incisivos Incessantes",
			'de-de': "Viererlei Nagerei"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794531,
				tcgplayer: 589998
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794531,
				tcgplayer: 589998
			}
		},
	],

	illustrator: "DOM",

}

export default card
