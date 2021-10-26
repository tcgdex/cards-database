import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Transfer",
			es: "Traspaso Metálico",
			it: "Spostametallo",
			pt: "Metal Transfer",
			de: "Metalltransfer"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Metal de 1 de tus Pokémon a otro de tus Pokémon.",
			it: "Durante il tuo turno, puoi spostare un'Energia Metal da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			pt: "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Metal-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Zen Headbutt",
			de: "Zen-Kopfstoß"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,

	description: {
		en: "Many scientists suspect that this Pokémon originated outside the Galar region, based on the patterns on its body."
	},

	stage: "Stage1",
	dexId: [437],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
