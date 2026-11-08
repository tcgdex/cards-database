import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'es-mx': "Shieldon",
		'de-de': "Schilterus",
		'it-it': "Shieldon",
		'pt-br': "Shieldon"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [410],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Antique Armor Fossil"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Smithereen Smash",
			'fr-fr': "Pulvérisation",
			'es-es': "Machaque",
			'es-mx': "Aplastamiento Total",
			'de-de': "Splitterschlag",
			'it-it': "Frammentazione",
			'pt-br': "Pancada Estilhaçante"
		},

		cost: ["Metal", "Colorless"],

		damage: 50,

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
	],
}

export default card
