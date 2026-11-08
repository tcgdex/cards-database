import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [416],
	set: Set,

	name: {
		'fr-fr': "Apireine",
		'en-us': "Vespiquen",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Apitrini",
		'en-us': "Combee",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Entaille Double",
			'en-us': "Double Stab",
			'es-es': "Doble Puñalada",
			'it-it': "Doppia Pugnalata",
			'pt-br': "Facada Dupla",
			'de-de': "Doppelstich"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Ordre de Raid",
			'en-us': "Order a Raid",
			'es-es': "Orden de Ataque",
			'it-it': "Raid a Comando",
			'pt-br': "Comando de Reide",
			'de-de': "Überfallbefehl"
		},

		effect: {
			'fr-fr': "Choisissez l'un de vos Apitrini de Banc et mélangez ce Pokémon-là, ainsi que toutes les cartes qui lui sont attachées, avec votre deck. Si vous ne pouvez pas mélanger un Apitrini avec votre deck, cette attaque ne fait rien.",
			'en-us': "Choose 1 of your Benched Combee and shuffle that Pokémon and all attached cards into your deck. If you can't shuffle a Combee into your deck, this attack does nothing.",
			'es-es': "Elige 1 de tus Combee en Banca, pon ese Pokémon y todas las cartas unidas a él en tu baraja y baraja todas las cartas. Si no puedes poner un Combee en tu baraja, este ataque no hace nada.",
			'it-it': "Scegli uno dei tuoi Combee in panchina e rimischia quel Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se non puoi rimischiare un Combee nel tuo mazzo, questo attacco non ha effetto.",
			'pt-br': "Escolha 1 dos seus Combee no Banco e embaralhe aquele Pokémon e todas as cartas ligadas a ele no seu baralho. Se não puder embaralhar um Combee no seu baralho, este ataque não fará nada.",
			'de-de': "Wähle 1 Wadribie auf deiner Bank und mische jenes Pokémon und alle angelegten Karten in dein Deck. Wenn du kein Wadribie in dein Deck mischen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715481,
				tcgplayer: 497420,
				cardtrader: 248305
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715481,
				tcgplayer: 497420,
				cardtrader: 248305
			}
		},
	],

	illustrator: "Megumi Higuchi",

	description: {
		'en-us': "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
	},
}

export default card
