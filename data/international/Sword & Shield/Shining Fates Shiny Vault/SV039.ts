import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [835],
	set: Set,

	name: {
		'fr-fr': "Voltoutou",
		'en-us': "Yamper",
		'es-es': "Yamper",
		'it-it': "Yamper",
		'pt-br': "Yamper",
		'de-de': "Voldi"
	},

	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			'fr-fr': "Hurlement",
			'en-us': "Roar",
			'es-es': "Rugido",
			'it-it': "Boato",
			'pt-br': "Rugido",
			'de-de': "Brüller"
		},

		effect: {
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Choc Statique",
			'en-us': "Static Shock",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539583,
				tcgplayer: 232395
			}
		},
	],
}

export default card
