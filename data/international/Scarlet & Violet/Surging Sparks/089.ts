import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Energy Assist",
			'fr-fr': "Assistance Énergétique",
			'es-es': "Asistencia de Energía",
			'it-it': "Assistienergia",
			'pt-br': "Socorro de Energia",
			'de-de': "Energieförderung"
		},

		effect: {
			'en-us': "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Dazzle Dance",
			'fr-fr': "Danse Éblouissante",
			'es-es': "Danza Deslumbrante",
			'it-it': "Accecadanza",
			'pt-br': "Dança Fascinante",
			'de-de': "Verwirrender Tanz"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794397,
				tcgplayer: 590013
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794397,
				tcgplayer: 590013
			}
		},
	],

	illustrator: "saino misaki",
	
}

export default card
