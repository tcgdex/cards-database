import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	stage: "Stage1",

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
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Metal de l'un de vos Pokémon vers un autre de vos Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Metal de 1 de tus Pokémon a otro de tus Pokémon.",
			it: "Durante il tuo turno, puoi spostare un'Energia Metal da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Metal de 1 dos seus Pokémon para outro Pokémon seu.",
			de: "Beliebig oft während deines Zuges kannst du 1 Metal-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card