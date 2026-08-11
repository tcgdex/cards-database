import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Solgaleo",
		'fr-fr': "Solgaleo",
		'es-es': "Solgaleo",
		'it-it': "Solgaleo",
		'pt-br': "Solgaleo",
		'de-de': "Solgaleo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	types: ["Metal"],
	illustrator: "kirisAki",
	hp: 170,
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rush In",
			'fr-fr': "Intervention",
			'es-es': "Apremio",
			'it-it': "Capofitto",
			'pt-br': "Pressa",
			'de-de': "Hineinstürmen"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger contre votre Pokémon Actif.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
			'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em seu Banco, você poderá trocá-lo com seu Pokémon Ativo.",
			'de-de': "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Solar Geyser",
			'fr-fr': "Geyser Solaire",
			'es-es': "Géiser Solar",
			'it-it': "Geyser Solare",
			'pt-br': "Gêiser Solar",
			'de-de': "Solargeysir"
		},

		effect: {
			'en-us': "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
		'es-es': "Cosmoem",
		'it-it': "Cosmoem",
		'pt-br': "Cosmoem",
		'de-de': "Cosmovum"
	},

	regulationMark: "E",

	description: {
		'en-us': "In writings from the distant past, it's called by the name \"the beast that devours the sun.\""
	},

	dexId: [791],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576766,
				tcgplayer: 250316
			}
		},
	],
}

export default card
