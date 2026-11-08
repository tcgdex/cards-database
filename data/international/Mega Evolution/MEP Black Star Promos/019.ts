import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'de-de': "Elfun",
		'it-it': "Whimsicott",
		'es-es': "Whimsicott",
		'pt-br': "Whimsicott"
	},

	illustrator: "Yuka Tanaka",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [547],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'de-de': "Waumboll",
		'it-it': "Cottonee",
		'es-es': "Cottonee",
		'pt-br': "Cottonee"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Healing Fluff",
			'fr-fr': "Soin Douillet",
			'de-de': "Heilender Flausch",
			'it-it': "Batuffocura",
			'es-es': "Pelusa Sanadora",
			'pt-br': "Lanugem Curativa"
		},

		effect: {
			'en-us': "Heal all damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			'de-de': "Heile allen Schaden bei 1 Pokémon auf deiner Bank.",
			'it-it': "Cura uno dei Pokémon nella tua panchina da tutti i danni.",
			'es-es': "Cura todos los puntos de daño a uno de tus Pokémon en Banca.",
			'pt-br': "Cure todo o dano de 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "U-turn",
			'fr-fr': "Demi-Tour",
			'de-de': "Kehrtwende",
			'it-it': "Retromarcia",
			'es-es': "Ida y Vuelta",
			'pt-br': "Fazer Retorno"
		},

		damage: 50,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con uno nella tua panchina.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859022,
				tcgplayer: 664054
			}
		},
	],
}

export default card
