import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		'en-us': "Rapid Strike Urshifu V",
		'fr-fr': "Shifours Mille Poings V",
		'es-es': "Urshifu Golpe Fluido V",
		'it-it': "Urshifu Pluricolpo V",
		'pt-br': "Urshifu Golpe Fluido V",
		'de-de': "Fließender-Angriff-Wulaosu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'es-es': "Pasada de Ataque",
			'it-it': "Mitragliare",
			'pt-br': "Bombardear",
			'de-de': "Beharken"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Hundred Furious Blows",
			'fr-fr': "Multicoups Furieux",
			'es-es': "Cien Golpes Furiosos",
			'it-it': "Cento Colpi Distruttivi",
			'pt-br': "Centenas de Golpes Furiosos",
			'de-de': "Hundert heftige Schläge"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 546411,
				tcgplayer: 234056
			}
		},
	],
}

export default card
