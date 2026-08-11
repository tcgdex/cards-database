import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Intelligence Gathering",
				'fr-fr': "Collecte de Renseignements",
				'es-es': "Espionaje",
				'it-it': "Raccolta Informazioni",
				'pt-br': "Reunião de Inteligência",
				'de-de': "Informationssammler"
			},
			effect: {
				'en-us': "You may draw cards until you have 6 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere sei carte in mano.",
				'pt-br': "Você poderá comprar cards até ter 6 cards em sua mão.",
				'de-de': "Du kannst so viele Karten ziehen, bis du 6 Karten auf deiner Hand hast."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bee Revenge",
				'fr-fr': "Abeille Vindicative",
				'es-es': "Venganza Abeja",
				'it-it': "Apevendetta",
				'pt-br': "Vingança da Abelha",
				'de-de': "Bienenvergeltung"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Pokémon in your discard pile.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon en tu pila de descartes.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua pila degli scarti.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada Pokémon em sua pilha de descarte.",
				'de-de': "Dieser Angriff fügt für jedes Pokémon in deinem Ablagestapel 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
	},

	thirdParty: {
		cardmarket: 284191,
		tcgplayer: 101435
	}
}

export default card
