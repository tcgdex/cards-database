import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1003],
	set: Set,

	name: {
		'en-us': "Ting-Lu",
		'fr-fr': "Dinglu",
		'es-es': "Ting-Lu",
		'it-it': "Ting-Lu",
		'pt-br': "Ting-Lu",
		'de-de': "Dinglu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Sand Bringer",
			'fr-fr': "Porteur de Sable",
			'es-es': "Portador de Arena",
			'it-it': "Portasabbia",
			'pt-br': "Emissário das Areias",
			'de-de': "Sandbringer"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {F} Energy cards from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {F} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Arrogant Impact",
			'fr-fr': "Impact Arrogant",
			'es-es': "Impacto Soberbia",
			'it-it': "Impatto Arrogante",
			'pt-br': "Impacto da Soberba",
			'de-de': "Arroganter Einschlag"
		},

		effect: {
			'en-us': "If this Pokémon has 4 or more damage counters on it, this attack does nothing.",
			'fr-fr': "Si ce Pokémon a au moins 4 marqueurs de dégâts, cette attaque ne fait rien.",
			'es-es': "Si este Pokémon tiene 4 contadores de daño o más sobre él, este ataque no hace nada.",
			'it-it': "Se questo Pokémon ha quattro o più segnalini danno, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon tiver 4 ou mais contadores de dano nele, este ataque não fará nada.",
			'de-de': "Wenn auf diesem Pokémon 4 oder mehr Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "The fear poured into an ancient ritual vessel has clad itself in rocks and dirt to become a Pokémon.",
	},

	variants: [
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740627,
				tcgplayer: 523781,
				cardtrader: 265219
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740627,
				tcgplayer: 523781,
				cardtrader: 265219
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	
}

export default card
