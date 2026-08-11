import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [35],

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'es-mx': "Clefairy",
		'de-de': "Piepi",
		'it-it': "Clefairy",
		'pt-br': "Clefairy"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Follow Me",
			'fr-fr': "Par Ici",
			'es-es': "Señuelo",
			'es-mx': "Señuelo",
			'de-de': "Spotlight",
			'it-it': "Sonoqui",
			'pt-br': "Isca-viva"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'es-mx': "Desplome",
			'de-de': "Plumps",
			'it-it': "Tonfo",
			'pt-br': "Baque"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684414,
				cardmarket: 877444
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684414,
				cardmarket: 877444
			}
		}
	],

}

export default card
