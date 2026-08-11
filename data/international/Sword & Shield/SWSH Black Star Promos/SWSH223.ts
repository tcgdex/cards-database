import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'fr-fr': "Mewtwo V",
		'de-de': "Mewtu V",
		'es-es': "Mewtwo V",
		'pt-br': "Mewtwo V",
		'it-it': "Mewtwo V",
		'en-us': "Mewtwo V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Super Psy",
			'de-de': "Super-Psischlag",
			'es-es': "Superrayo Psi",
			'pt-br': "Super-raio Psíquico",
			'it-it': "Superpsico",
			'en-us': "Super Psy Bolt"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Rupture Transfert",
			'de-de': "Transferbruch",
			'es-es': "Golpe Traspaso",
			'pt-br': "Transferência Intensa",
			'it-it': "Sfondatransfer",
			'en-us': "Transfer Break"
		},

		effect: {
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 160
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
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 572159
	}
}

export default card
