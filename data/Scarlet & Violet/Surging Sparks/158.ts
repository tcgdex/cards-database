import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		en: "Maushold",
		fr: "Famignol",
		es: "Maushold",
		it: "Maushold",
		pt: "Maushold",
		de: "Famieps"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		en: "Tandemaus",
		fr: "Compagnol",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Familial March",
			fr: "Marche Familiale",
			es: "Marcha Familiar",
			it: "Marcia Familiare",
			pt: "Marcha em Família",
			de: "Familienmarsch"
		},

		effect: {
			en: "Search your deck for up to 2 in any combination of Maushold and Maushold ex and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une combinaison d'un maximum de 2 Famignol et Famignol-ex, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja, en cualquier combinación, hasta 2 Maushold y Maushold ex y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Maushold e Maushold-ex in qualsiasi combinazione e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Maushold e Maushold ex no seu baralho em qualquer combinação e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 2 Famieps und Famieps-ex und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Incessant Incisors",
			fr: "Incisives Incessantes",
			es: "Incisivos Incesantes",
			it: "Incisivi Incessanti",
			pt: "Incisivos Incessantes",
			de: "Viererlei Nagerei"
		},

		effect: {
			en: "Flip 4 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "DOM",

	thirdParty: {
		cardmarket: 794531
	}
}

export default card
