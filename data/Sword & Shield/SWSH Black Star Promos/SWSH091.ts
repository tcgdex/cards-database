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
		en: "Bronzor",
		fr: "Archéomire",
		de: "Bronzel",
		es: "Bronzor",
		pt: "Bronzor",
		it: "Bronzor"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Transfer",
			es: "Traspaso Metálico",
			it: "Spostametallo",
			pt: "Transferência de Metal",
			de: "Metalltransfer",
			fr: "Transfert de Métal"
		},

		effect: {
			en: "As often as you like during your turn, you may move a {M} Energy from 1 of your Pokémon to another of your Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {M} de 1 de tus Pokémon a otro de tus Pokémon.",
			it: "Durante il tuo turno, puoi spostare un'Energia {M} da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia {M} de 1 dos seus Pokémon para outro Pokémon seu.",
			de: "Beliebig oft während deines Zuges kannst du 1 {M}-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {M} de l'un de vos Pokémon vers un autre de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
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
