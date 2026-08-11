import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian",
		'de-de': "Zacian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Iron Roar",
			'fr-fr': "Rugissement de Fer",
			'es-es': "Rugido Férreo",
			'it-it': "Ruggito Ferreo",
			'pt-br': "Rugido Férreo",
			'de-de': "Eisengebrüll"
		},

		effect: {
			'en-us': "Attach a Basic {M} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie {M} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía {M} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {M} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {M} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-{M}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Brave Blade",
			'fr-fr': "Lame Vaillante",
			'es-es': "Cuchilla Osada",
			'it-it': "Baldalama",
			'pt-br': "Lâmina Valente",
			'de-de': "Couragierte Klinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Able to cut down anything with a single strike, it became known as the Fairy King's Sword, and it inspired awe in friend and foe alike.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740674,
				tcgplayer: 523815,
				cardtrader: 265236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740674,
				tcgplayer: 523815,
				cardtrader: 265236
			}
		},
	],

	illustrator: "Tonji Matsuno",

	
}

export default card
