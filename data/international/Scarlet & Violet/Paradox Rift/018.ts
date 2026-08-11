import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1001],
	set: Set,

	name: {
		'en-us': "Wo-Chien",
		'fr-fr': "Chongjian",
		'es-es': "Wo-Chien",
		'it-it': "Wo-Chien",
		'pt-br': "Wo-Chien",
		'de-de': "Chongjian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leaf Bringer",
			'fr-fr': "Porteur de Feuilles",
			'es-es': "Portador de Hojas",
			'it-it': "Portafoglia",
			'pt-br': "Emissário das Folhas",
			'de-de': "Laubbringer"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {G} Energy cards from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {G} de base de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {G} Básica de tu pila de descartes a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {G} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {G} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{G}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Binding Greed",
			'fr-fr': "Avidité Contraignante",
			'es-es': "Avaricia Vinculante",
			'it-it': "Vincolo Avido",
			'pt-br': "Gula Aprisionante",
			'de-de': "Fesselnde Gier"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon cost {C}{C} more.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C}{C} de plus.",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C}{C} más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C}{C}.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C}{C} a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}{C}."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It drains the life-force from vegetation, causing nearby forests to instantly wither and fields to turn barren.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740494,
				tcgplayer: 523618,
				cardtrader: 265098
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740494,
				tcgplayer: 523618,
				cardtrader: 265098
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
