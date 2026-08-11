import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		'en-us': "Great Tusk",
		'fr-fr': "Fort-Ivoire",
		'es-es': "Colmilargo",
		'pt-br': "Presa Grande",
		'it-it': "Grandizanne",
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
			'pt-br': "Colapso Terrestre",
			'it-it': "Crolloterra",
			'de-de': "Landrutsch"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck. If you played an Ancient Supporter card from your hand during this turn, discard 3 more cards in this way.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué une carte Supporter Temps passé de votre main pendant ce tour, défaussez 3 cartes supplémentaires de cette façon.",
			'es-es': "Descarta la primera carta de la baraja de tu rival. Si has jugado una carta de Partidario del pasado de tu mano durante este turno, descarta 3 cartas más de esta manera.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente. Se você jogou uma carta de Apoiador Ancestral da sua mão durante este turno, descarte 3 cartas a mais desta forma.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario. Se hai giocato una carta Aiuto Tempo Passato dalla tua mano durante questo turno, scarta altre tre carte in questo modo.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn du eine Vergangenheitsunterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, lege 3 weitere Karten auf diese Weise auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Tusk",
			'fr-fr': "Défense Géante",
			'es-es': "Colmillo Gigante",
			'pt-br': "Presa Gigante",
			'it-it': "Gigaspuntone",
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
	illustrator: "GIDORA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805444,
				tcgplayer: 610410
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805444,
				tcgplayer: 610410
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806486,
				tcgplayer: 610576
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806487,
				tcgplayer: 610677
			}
		},
	],
}

export default card
