import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'es-mx': "Duraludon",
		'de-de': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [884],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser",
			'es-es': "Hiperrayo",
			'es-mx': "Hiperrayo",
			'de-de': "Hyperstrahl",
			'it-it': "Iper Raggio",
			'pt-br': "Hiper-raio"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Duraludon's body is comprised of a special metal that's lightweight and scratch resistant. It's also smooth, as though it was given a mirror finish.",
	},

	illustrator: "Shinji Kanda",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857649,
				tcgplayer: 662154,
				cardtrader: 356860
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857649,
				tcgplayer: 662154,
				cardtrader: 356860
			}
		},
	],	
}

export default card
