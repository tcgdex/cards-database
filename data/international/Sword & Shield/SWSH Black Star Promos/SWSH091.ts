import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'de-de': "Bronzel",
		'es-es': "Bronzor",
		'pt-br': "Bronzor",
		'it-it': "Bronzor"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Transfer",
			'es-es': "Traspaso Metálico",
			'it-it': "Spostametallo",
			'pt-br': "Transferência de Metal",
			'de-de': "Metalltransfer",
			'fr-fr': "Transfert de Métal"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move a {M} Energy from 1 of your Pokémon to another of your Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {M} de 1 de tus Pokémon a otro de tus Pokémon.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia {M} da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia {M} de 1 dos seus Pokémon para outro Pokémon seu.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 {M}-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {M} de l'un de vos Pokémon vers un autre de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
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
		'en-us': "Many scientists suspect that this Pokémon originated outside the Galar region, based on the patterns on its body."
	},

	stage: "Stage1",
	dexId: [437],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546966
	}
}

export default card
