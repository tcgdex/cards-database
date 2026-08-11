import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [281],
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Teleportation Burst",
			'fr-fr': "Téléportation Explosive",
			'es-es': "Explosión Teleportadora",
			'it-it': "Scoppio Teletrasporto",
			'pt-br': "Teletransporte Explosivo",
			'de-de': "Blitz-Teleportation"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
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
	regulationMark: "F",


	description: {
		'en-us': "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658634,
				tcgplayer: 272262
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658634,
				tcgplayer: 272262
			}
		},
	],
}

export default card
