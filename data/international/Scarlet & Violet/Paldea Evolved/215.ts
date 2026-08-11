import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		'fr-fr': "Bérasca",
		'en-us': "Rabsca",
		'es-es': "Rabsca",
		'it-it': "Rabsca",
		'pt-br': "Rabsca",
		'de-de': "Skarabaks"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Léboulérou",
		'en-us': "Rellor",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Second Souffle",
			'en-us': "Revival Blessing",
			'es-es': "Plegaria Vital",
			'it-it': "Preghiera Vitale",
			'pt-br': "Bênção do Reviver",
			'de-de': "Vitalsegen"
		},

		effect: {
			'fr-fr': "Placez un Pokémon de votre pile de défausse sur votre Banc.",
			'en-us': "Put a Pokémon from your discard pile onto your Bench.",
			'es-es': "Pon 1 Pokémon de tu pila de descartes en tu Banca.",
			'it-it': "Prendi un Pokémon dalla tua pila degli scarti e mettilo in panchina.",
			'pt-br': "Coloque um Pokémon da sua pilha de descarte no seu Banco.",
			'de-de': "Lege 1 Pokémon aus deinem Ablagestapel auf deine Bank."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'fr-fr': "Rafale Psy",
			'en-us': "Psybeam",
			'es-es': "Psicorrayo",
			'it-it': "Psicoraggio",
			'pt-br': "Feixe Psíquico",
			'de-de': "Psystrahl"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715690,
				tcgplayer: 497618,
				cardtrader: 248867
			}
		},
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "The body that supports the ball barely moves. Therefore, it is thought that the true body of this Pokémon is actually inside the ball.",
	},
}

export default card
