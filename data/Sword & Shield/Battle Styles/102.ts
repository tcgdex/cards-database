import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

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

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Transfer",
			fr: "Transfert de Métal",
			es: "Traspaso Metálico",
			it: "Spostametallo",
			pt: "Transferência de Metal",
			de: "Metalltransfer"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Metal de l’un de vos Pokémon vers un autre de vos Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Metal de 1 de tus Pokémon a otro de tus Pokémon.",
			it: "Durante il tuo turno, puoi spostare un’Energia Metal da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Metal de 1 dos seus Pokémon para outro Pokémon seu.",
			de: "Beliebig oft während deines Zuges kannst du 1 Metal-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul",
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
	regulationMark: "E"
}

export default card