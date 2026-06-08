import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Gourgeist ex",
		fr: "Banshitrouye-ex",
		es: "Gourgeist ex",
		'es-mx': "Gourgeist ex",
		de: "Pumpdjinn-ex",
		it: "Gourgeist-ex",
		pt: "Gourgeist ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [711],
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		en: "Pumpkaboo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Horrifying Rondo",
			fr: "Rondo Horrifiant",
			es: "Rondó Aterrador",
			'es-mx': "Rondó Terrorífico",
			de: "Grauenhaftes Rondo",
			it: "Rondò Orripilante",
			pt: "Cântico Horripilante"
		},

		cost: ["Psychic"],
		damage: "30+",

		effect: {
			en: "This attack does 50 more damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
			es: "Este ataque hace 50 puntos de daño más por cada uno de tus Pokémon en Banca que tengan algún contador de daño sobre ellos.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada uno de tus Pokémon en Banca que tengan algún contador de daño sobre ellos.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 50 danni in più per ciascuno dei Pokémon nella tua panchina che ha dei segnalini danno.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele."
		}
	}, {
		name: {
			en: "Ghostly Touch",
			fr: "Effleurement Spectral",
			es: "Toque Fantasmal",
			'es-mx': "Contacto Fantasmal",
			de: "Gespenstische Berührung",
			it: "Tocco Spettrale",
			pt: "Toque Fantasmagórico"
		},

		cost: ["Psychic", "Psychic"],
		damage: 140,

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente."
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

	thirdParty: {
		tcgplayer: 693498,
		cardmarket: 886494
	}
}

export default card
