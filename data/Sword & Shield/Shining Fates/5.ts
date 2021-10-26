import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tropius",
		en: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Main Verte",
			en: "Attach Leaves",
			es: "Unir Hojas",
			it: "Assegnafoglie",
			pt: "Ligar Folhas",
			de: "Blätter anlegen"
		},

		effect: {
			fr: "Attachez jusqu'à 2 cartes Énergie Grass de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			en: "Attach up to 2 Grass Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			es: "Une hasta 2 cartas de Energía Grass de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Assegna ai tuoi Pokémon in panchina fino a due carte Energia Grass dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Grass da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Lege bis zu 2 Grass-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Tornade",
			en: "Gust",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius."
	}
}

export default card
