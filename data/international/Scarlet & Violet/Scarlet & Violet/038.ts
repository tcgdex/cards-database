import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [911],
	set: Set,

	name: {
		'en-us': "Skeledirge",
		'fr-fr': "Flâmigator",
		'es-es': "Skeledirge",
		'it-it': "Skeledirge",
		'pt-br': "Skeledirge",
		'de-de': "Skelokrok"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Crocalor",
		'fr-fr': "Crocogril"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Passionate Singing",
			'fr-fr': "Chant Passionné",
			'es-es': "Canto Apasionado",
			'it-it': "Canto Appassionato",
			'pt-br': "Cantoria Acalorada",
			'de-de': "Feuriger Gesang"
		},

		effect: {
			'en-us': "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blazing Shout",
			'fr-fr': "Cri Ardent",
			'es-es': "Grito Abrasador",
			'it-it': "Urlo Rovente",
			'pt-br': "Grito Flamejante",
			'de-de': "Lodernder Schrei"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "Skeledirge's gentle singing soothes the souls of all that hear it. It burns its enemies to a crisp with flames of over 5,400 degrees Fahrenheit.",
	},

	thirdParty: {
        cardmarket: 702333,
        tcgplayer: 487879
    }
}

export default card