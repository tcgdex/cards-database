import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Hataya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Transfer",
			'fr-fr': "Transfert de Métal",
			'es-es': "Traspaso Metálico",
			'it-it': "Spostametallo",
			'pt-br': "Transferência de Metal",
			'de-de': "Metalltransfer"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Metal de l'un de vos Pokémon vers un autre de vos Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Metal de 1 de tus Pokémon a otro de tus Pokémon.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia Metal da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Metal de 1 dos seus Pokémon para outro Pokémon seu.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Metal-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "E",


	description: {
		'en-us': "Many scientists suspect that this Pokémon originated outside the Galar region, based on the patterns on its body.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658888,
				tcgplayer: 272482
			}
		},
	],
}

export default card
