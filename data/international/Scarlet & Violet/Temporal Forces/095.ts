import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		'en-us': "Coalossal",
		'fr-fr': "Monthracite",
		'es-es': "Coalossal",
		'it-it': "Coalossal",
		'pt-br': "Coalossal",
		'de-de': "Montecarbo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Gatling Tar",
			'fr-fr': "Goudron Mitraillant",
			'es-es': "Ráfaga de Alquitrán",
			'it-it': "Mitragliacatrame",
			'pt-br': "Disparador de Piche",
			'de-de': "Teergeschütz"
		},

		effect: {
			'en-us': "This attack does 80 more damage for each {R} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 80 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 80 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 80 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 80 pontos de dano a mais para cada Energia {R} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Cragalanche",
			'fr-fr': "Lapidalanche",
			'es-es': "Rocalud",
			'it-it': "Valanghiaia",
			'pt-br': "Rochavalanche",
			'de-de': "Grolllawine"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "To intimidate its opponents, Coalossal will vigorously shake its body, scattering coal from its smoldering back.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760725,
				tcgplayer: 542839
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760725,
				tcgplayer: 542839
			}
		},
	],

	illustrator: "Shiburingaru",

}

export default card