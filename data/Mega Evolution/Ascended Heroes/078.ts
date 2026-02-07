import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [103],

	name: {
		en: "Team Rocket's Exeggutor",
		fr: "Noadkoko de la Team Rocket",
		es: "Exeggutor del Team Rocket",
		'es-mx': "Exeggutor del Equipo Rocket",
		de: "Team Rockets Kokowei",
		it: "Exeggutor del Team Rocket",
		pt: "Exeggutor da Equipe Rocket"
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
			en: "Tri Kinesis",
			fr: "Tri-Kinésie",
			es: "Triple Kinesia",
			'es-mx': "Triple Kinesia",
			de: "Trikinese",
			it: "Cinèsi Tripla",
			pt: "Tricinese"
		},

		effect: {
			en: "Flip 3 coins. If all of them are heads, Knock Out 1 of your opponent's Pokémon.",
			fr: "Lancez 3 pièces. Si vous obtenez 3 côtés face, mettez K.O. l'un des Pokémon de votre adversaire.",
			es: "Lanza 3 monedas. Si salen 3 caras, deja Fuera de Combate a 1 de los Pokémon de tu rival.",
			'es-mx': "Lanza 3 monedas. Si sale cara en todas, deja Fuera de Combate a 1 de los Pokémon de tu rival.",
			de: "Wirf 3 Münzen. Zeigen alle Münzen Kopf, mache 1 Pokémon deines Gegners kampfunfähig.",
			it: "Lancia tre volte una moneta. Se esce testa tutte e tre le volte, metti KO uno dei Pokémon del tuo avversario.",
			pt: "Jogue 3 moedas. Se todas saírem cara, Nocauteie 1 dos Pokémon do seu oponente."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			'es-mx': "Doble Filo",
			de: "Risikotackle",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 869689,
		tcgplayer: 675890
	}
}

export default card
