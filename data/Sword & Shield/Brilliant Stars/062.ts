import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Special Transfer",
			fr: "Transfert Spécial",
			es: "Transferencia Especial",
			it: "Transfer Speciale",
			pt: "Transferência Especial",
			de: "Spezialtransfer"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Special Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie spéciale de l'un de vos Pokémon vers un autre de vos Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Especial de 1 de tus Pokémon a otro de tus Pokémon.",
			it: "Durante il tuo turno, puoi spostare un'Energia speciale da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Especial de 1 dos seus Pokémon para outro Pokémon seu.",
			de: "Beliebig oft während deines Zuges kannst du 1 Spezial-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Devour Soul",
			fr: "Dévoreur d'Âmes",
			es: "Devorar Almas",
			it: "Divoranima",
			pt: "Devorador de Almas",
			de: "Seelenverschlinger"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card