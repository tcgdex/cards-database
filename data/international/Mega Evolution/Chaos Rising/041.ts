import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Gourgeist ex",
		'fr-fr': "Banshitrouye-ex",
		'es-es': "Gourgeist ex",
		'es-mx': "Gourgeist ex",
		'de-de': "Pumpdjinn-ex",
		'it-it': "Gourgeist-ex",
		'pt-br': "Gourgeist ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [711],
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Pumpkaboo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Horrifying Rondo",
			'fr-fr': "Rondo Horrifiant",
			'es-es': "Rondó Aterrador",
			'es-mx': "Rondó Terrorífico",
			'de-de': "Grauenhaftes Rondo",
			'it-it': "Rondò Orripilante",
			'pt-br': "Cântico Horripilante"
		},

		cost: ["Psychic"],
		damage: "30+",

		effect: {
			'en-us': "This attack does 50 more damage for each of your Benched Pokémon that has any damage counters on it.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada uno de tus Pokémon en Banca que tengan algún contador de daño sobre ellos.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada uno de tus Pokémon en Banca que tengan algún contador de daño sobre ellos.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ciascuno dei Pokémon nella tua panchina che ha dei segnalini danno.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele."
		}
	}, {
		name: {
			'en-us': "Ghostly Touch",
			'fr-fr': "Effleurement Spectral",
			'es-es': "Toque Fantasmal",
			'es-mx': "Contacto Fantasmal",
			'de-de': "Gespenstische Berührung",
			'it-it': "Tocco Spettrale",
			'pt-br': "Toque Fantasmagórico"
		},

		cost: ["Psychic", "Psychic"],
		damage: 140,

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886433,
				tcgplayer: 693497
			}
		},
	],
}

export default card
