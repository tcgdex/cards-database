import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo V",
		'fr-fr': "Mewtwo V",
		'es-es': "Mewtwo V",
		'it-it': "Mewtwo V",
		'pt-br': "Mewtwo V",
		'de-de': "Mewtu V"
	},

	illustrator: "Nurikabe",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Transfer Break",
			'fr-fr': "Rupture Transfert",
			'es-es': "Golpe Traspaso",
			'it-it': "Sfondatransfer",
			'pt-br': "Transferência Intensa",
			'de-de': "Transferbruch"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
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




	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665266,
				tcgplayer: 276960
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 728200,
				tcgplayer: 513796
			}
		},
	],
}

export default card
