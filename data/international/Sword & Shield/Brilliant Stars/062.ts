import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [477],
	set: Set,

	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'es-es': "Dusknoir",
		'it-it': "Dusknoir",
		'pt-br': "Dusknoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "otumami",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Special Transfer",
			'fr-fr': "Transfert Spécial",
			'es-es': "Transferencia Especial",
			'it-it': "Transfer Speciale",
			'pt-br': "Transferência Especial",
			'de-de': "Spezialtransfer"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move a Special Energy from 1 of your Pokémon to another of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie spéciale de l'un de vos Pokémon vers un autre de vos Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Especial de 1 de tus Pokémon a otro de tus Pokémon.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia speciale da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Especial de 1 dos seus Pokémon para outro Pokémon seu.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Spezial-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Devour Soul",
			'fr-fr': "Dévoreur d'Âmes",
			'es-es': "Devorar Almas",
			'it-it': "Divoranima",
			'pt-br': "Devorador de Almas",
			'de-de': "Seelenverschlinger"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608512,
				tcgplayer: 263778
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608512,
				tcgplayer: 263778
			}
		},
	],
}

export default card
