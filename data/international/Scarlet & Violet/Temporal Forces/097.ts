import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		'en-us': "Great Tusk",
		'fr-fr': "Fort-Ivoire",
		'es-es': "Colmilargo",
		'it-it': "Grandizanne",
		'pt-br': "Presa Grande",
		'de-de': "Riesenzahn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Land Collapse",
			'fr-fr': "Effondrement de Terrain",
			'es-es': "Derrumbe de Tierra",
			'it-it': "Crolloterra",
			'pt-br': "Colapso Terrestre",
			'de-de': "Landrutsch"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck. If you played an Ancient Supporter card from your hand during this turn, discard 3 more cards in this way.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué une carte Supporter Temps passé de votre main pendant ce tour, défaussez 3 cartes supplémentaires de cette façon.",
			'es-es': "Descarta la primera carta de la baraja de tu rival. Si has jugado una carta de Partidario del pasado de tu mano durante este turno, descarta 3 cartas más de esta manera.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario. Se hai giocato una carta Aiuto Tempo Passato dalla tua mano durante questo turno, scarta altre tre carte in questo modo.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente. Se você jogou uma carta de Apoiador Ancestral da sua mão durante este turno, descarte 3 cartas a mais desta forma.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn du eine Vergangenheitsunterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, lege 3 weitere Karten auf diese Weise auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Tusk",
			'fr-fr': "Défense Géante",
			'es-es': "Colmillo Gigante",
			'it-it': "Gigaspuntone",
			'pt-br': "Presa Gigante",
			'de-de': "Riesenstoßzahn"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Sightings of this Pokémon have occurred in recent years. The name Great Tusk was taken from a creature listed in a certain book.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760727,
				tcgplayer: 542841
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760727,
				tcgplayer: 542841
			}
		},
	],

	illustrator: "GIDORA",

}

export default card