import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [64],
	set: Set,

	name: {
		'fr-fr': "Kadabra",
		'en-us': "Kadabra",
		'es-es': "Kadabra",
		'it-it': "Kadabra",
		'pt-br': "Kadabra",
		'de-de': "Kadabra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Abra",
		'en-us': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'pt-br': "Abra",
		'de-de': "Abra"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Attaque de Téléportation",
			'en-us': "Teleportation Attack",
			'es-es': "Ataque Teleportador",
			'it-it': "Attacco Teletrasporto",
			'pt-br': "Golpe de Teletransporte",
			'de-de': "Teleportationsattacke"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon's telekinesis is immensely powerful. To prepare for evolution, Kadabra stores up psychic energy in the star on its forehead.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733659,
				tcgplayer: 516269,
				cardtrader: 261188
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733659,
				tcgplayer: 516269,
				cardtrader: 261188
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

	
}

export default card
