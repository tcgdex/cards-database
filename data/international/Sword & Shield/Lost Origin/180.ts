import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [142],
	set: Set,

	name: {
		'en-us': "Aerodactyl V",
		'fr-fr': "Ptéra V",
		'es-es': "Aerodactyl V",
		'it-it': "Aerodactyl V",
		'pt-br': "Aerodactyl V",
		'de-de': "Aerodactyl V"
	},

	illustrator: "Nurikabe",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Crush",
			'fr-fr': "Écrasement Rocheux",
			'es-es': "Aplastamiento Rocoso",
			'it-it': "Tritaroccia",
			'pt-br': "Pedra Esmagadora",
			'de-de': "Felsenmalmer"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674185,
				tcgplayer: 284122
			}
		},
	],
}

export default card
