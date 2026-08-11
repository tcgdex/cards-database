import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		'en-us': "Volcanion",
		'fr-fr': "Volcanion",
		'es-es': "Volcanion",
		'it-it': "Volcanion",
		'pt-br': "Volcanion",
		'de-de': "Volcanion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Dual Turbo",
			'fr-fr': "Turbo Duo",
			'es-es': "Turbo Dual",
			'it-it': "Doppia Turbina",
			'pt-br': "Turbo Duplo",
			'de-de': "Doppelturbo"
		},

		effect: {
			'en-us': "Choose up to 2 of your Benched Pokémon and attach a Basic {R} Energy card from your discard pile to each of them.",
			'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon de Banc, puis attachez une carte Énergie {R} de base de votre pile de défausse à chacun d'eux.",
			'es-es': "Elige hasta 2 de tus Pokémon en Banca y une 1 carta de Energía {R} Básica de tu pila de descartes a cada uno de ellos.",
			'it-it': "Scegli fino a due dei tuoi Pokémon in panchina e assegna a ognuno di essi una carta Energia base {R} dalla tua pila degli scarti.",
			'pt-br': "Escolha até 2 dos seus Pokémon no Banco e ligue uma carta de Energia {R} Básica da sua pilha de descarte a cada um deles.",
			'de-de': "Wähle bis zu 2 Pokémon auf deiner Bank und lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
	},

	variants: [
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740498,
				tcgplayer: 523625,
				cardtrader: 265056
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740498,
				tcgplayer: 523625,
				cardtrader: 265056
			}
		},
	],

	illustrator: "Nisota Niso",

	
}

export default card
