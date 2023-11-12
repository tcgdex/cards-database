import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Apireine",
		en: "Vespiquen",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Entaille Double",
			en: "Double Stab",
			es: "Doble Puñalada",
			it: "Doppia Pugnalata",
			pt: "Facada Dupla",
			de: "Doppelstich"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass"],

		name: {
			fr: "Ordre de Raid",
			en: "Order a Raid",
			es: "Orden de Ataque",
			it: "Raid a Comando",
			pt: "Comando de Reide",
			de: "Überfallbefehl"
		},

		effect: {
			fr: "Choisissez l'un de vos Apitrini de Banc et mélangez ce Pokémon-là, ainsi que toutes les cartes qui lui sont attachées, avec votre deck. Si vous ne pouvez pas mélanger un Apitrini avec votre deck, cette attaque ne fait rien.",
			en: "Choose 1 of your Benched Combee and shuffle that Pokémon and all attached cards into your deck. If you can't shuffle a Combee into your deck, this attack does nothing.",
			es: "Elige 1 de tus Combee en Banca, pon ese Pokémon y todas las cartas unidas a él en tu baraja y baraja todas las cartas. Si no puedes poner un Combee en tu baraja, este ataque no hace nada.",
			it: "Scegli uno dei tuoi Combee in panchina e rimischia quel Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se non puoi rimischiare un Combee nel tuo mazzo, questo attacco non ha effetto.",
			pt: "Escolha 1 dos seus Combee no Banco e embaralhe aquele Pokémon e todas as cartas ligadas a ele no seu baralho. Se não puder embaralhar um Combee no seu baralho, este ataque não fará nada.",
			de: "Wähle 1 Wadribie auf deiner Bank und mische jenes Pokémon und alle angelegten Karten in dein Deck. Wenn du kein Wadribie in dein Deck mischen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card