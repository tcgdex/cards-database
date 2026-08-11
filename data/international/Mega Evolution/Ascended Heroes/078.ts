import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Exeggutor",
		'fr-fr': "Noadkoko de la Team Rocket",
		'es-es': "Exeggutor del Team Rocket",
		'es-mx': "Exeggutor del Equipo Rocket",
		'de-de': "Team Rockets Kokowei",
		'it-it': "Exeggutor del Team Rocket",
		'pt-br': "Exeggutor da Equipe Rocket"
	},

	evolveFrom: {
		'en-us': "Team Rocket's Exeggcute",
		'fr-fr': "Noeunoeuf de la Team Rocket",
		'es-es': "Exeggcute del Team Rocket",
		'es-mx': "Exeggcute del Equipo Rocket",
		'de-de': "Team Rockets Owei",
		'it-it': "Exeggcute del Team Rocket",
		'pt-br': "Exeggcute da Equipe Rocket",
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tri Kinesis",
			'fr-fr': "Tri-Kinésie",
			'es-es': "Triple Kinesia",
			'es-mx': "Triple Kinesia",
			'de-de': "Trikinese",
			'it-it': "Cinèsi Tripla",
			'pt-br': "Tricinese"
		},

		effect: {
			'en-us': "Flip 3 coins. If all of them are heads, Knock Out 1 of your opponent's Pokémon.",
			'fr-fr': "Lancez 3 pièces. Si vous obtenez 3 côtés face, mettez K.O. l'un des Pokémon de votre adversaire.",
			'es-es': "Lanza 3 monedas. Si salen 3 caras, deja Fuera de Combate a 1 de los Pokémon de tu rival.",
			'es-mx': "Lanza 3 monedas. Si sale cara en todas, deja Fuera de Combate a 1 de los Pokémon de tu rival.",
			'de-de': "Wirf 3 Münzen. Zeigen alle Münzen Kopf, mache 1 Pokémon deines Gegners kampfunfähig.",
			'it-it': "Lancia tre volte una moneta. Se esce testa tutte e tre le volte, metti KO uno dei Pokémon del tuo avversario.",
			'pt-br': "Jogue 3 moedas. Se todas saírem cara, Nocauteie 1 dos Pokémon do seu oponente."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'es-mx': "Doble Filo",
			'de-de': "Risikotackle",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 150
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
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "It is said that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869689,
			tcgplayer: 675890
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870258,
			tcgplayer: 677053
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870257,
			tcgplayer: 676913
		}
	},
],
}

export default card
