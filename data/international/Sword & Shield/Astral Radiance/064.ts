import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Balloon",
			'fr-fr': "Ballon Effrayant",
			'es-es': "Globo Aterrador",
			'it-it': "Pallone Inquietante",
			'pt-br': "Balão Assustador",
			'de-de': "Spukballon"
		},

		effect: {
			'en-us': "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			'es-es': "Pon 2 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			'it-it': "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			'pt-br': "Coloque 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			'de-de': "Lege 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
		},

		damage: 50
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
		'en-us': "Some say this Pokémon is a collection of souls burdened with regrets, silently drifting through the dusk.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658639,
				tcgplayer: 272265
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658639,
				tcgplayer: 272265
			}
		},
	],
}

export default card
