import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Skeledirge",
		fr: "Flâmigator",
		es: "Skeledirge",
		it: "Skeledirge",
		pt: "Skeledirge",
		de: "Skelokrok"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Crocalor"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Passionate Singing",
			fr: "Chant Passionné",
			es: "Canto Apasionado",
			it: "Canto Appassionato",
			pt: "Cantoria Acalorada",
			de: "Feuriger Gesang"
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blazing Shout",
			fr: "Cri Ardent",
			es: "Grito Abrasador",
			it: "Urlo Rovente",
			pt: "Grito Flamejante",
			de: "Lodernder Schrei"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card