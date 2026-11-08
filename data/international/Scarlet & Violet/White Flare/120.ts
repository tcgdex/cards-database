import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [528],
	set: Set,

	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'de-de': "Fletiamo",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'es-es': "Swoobat",
		'es-mx': "Swoobat"
	},

	illustrator: "Saboteri",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'de-de': "Fleknoil",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'es-es': "Woobat",
		'es-mx': "Woobat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Happy Return",
			'fr-fr': "Retour Heureux",
			'de-de': "Freudige Rückkehr",
			'it-it': "Felice Ritorno",
			'pt-br': "Retorno Auspicioso",
			'es-es': "Feliz Retorno",
			'es-mx': "Retorno Feliz"
		},

		effect: {
			'en-us': "Put 1 of your Benched Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées.",
			'de-de': "Nimm 1 Pokémon von deiner Bank und alle angelegten Karten auf deine Hand.",
			'it-it': "Riprendi in mano uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate.",
			'pt-br': "Coloque 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele na sua mão.",
			'es-es': "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano.",
			'es-mx': "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'de-de': "Windstoß",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'es-es': "Tornado",
			'es-mx': "Ráfaga de Aire"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836133,
			tcgplayer: 642232
		}
	},
],
}

export default card
