import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [64],
	set: Set,

	name: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'es-es': "Kadabra",
		'it-it': "Kadabra",
		'pt-br': "Kadabra",
		'de-de': "Kadabra"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'pt-br': "Abra",
		'de-de': "Abra"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Teleportation Attack",
			'fr-fr': "Attaque de Téléportation",
			'es-es': "Ataque Teleportador",
			'it-it': "Attacco Teletrasporto",
			'pt-br': "Golpe de Teletransporte",
			'de-de': "Teleportationsattacke"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751688,
				tcgplayer: 534634,
				cardtrader: 274332
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "This Pokémon's telekinesis is immensely powerful. To prepare for evolution, Kadabra stores up psychic energy in the star on its forehead.",
	},

}

export default card
