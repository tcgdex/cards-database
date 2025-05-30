import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Skeledirge",
		fr: "Flâmigator",
		de: "Skelokrok",
		it: "Skeledirge",
		es: "Skeledirge",
		pt: "Skeledirge"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Passionate Singing",
			fr: "Chant Passionné",
			de: "Feuriger Gesang",
			it: "Canto Appassionato",
			es: "Canto Apasionado",
			pt: "Cantoria Acalorada"
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			pt: "Ligue até 2 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon como desejar."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blazing Shout",
			fr: "Cri Ardent",
			de: "Lodernder Schrei",
			it: "Urlo Rovente",
			es: "Grito Abrasador",
			pt: "Grito Flamejante"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 190
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card