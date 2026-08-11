import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'en-us': "Dragonite V",
		'fr-fr': "Dracolosse V",
		'es-es': "Dragonite V",
		'it-it': "Dragonite V",
		'pt-br': "Dragonite V",
		'de-de': "Dragoran V"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser",
			'es-es': "Hiperrayo",
			'it-it': "Iper Raggio",
			'pt-br': "Hiper-raio",
			'de-de': "Hyperstrahl"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60
	}, {
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			'en-us': "Buster Tail",
			'fr-fr': "Queue Destructrice",
			'es-es': "Cola Destructora",
			'it-it': "Coda Distruttrice",
			'pt-br': "Cauda Aniquiladora",
			'de-de': "Zertrümmernder Schweif"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665675,
				tcgplayer: 276962
			}
		},
	],
}

export default card
