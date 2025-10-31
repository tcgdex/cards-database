import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Gardevoir ex",
		fr: "Méga-Gardevoir-ex",
		de: "Mega-Guardevoir-ex",
		it: "Mega Gardevoir-ex",
		es: "Mega-Gardevoir ex",
		pt: "Mega Gardevoir ex",
		'es-mx': "Mega-Gardevoir ex"
	},

	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 360,
	types: ["Psychic"],
	stage: "Stage2",
	dexId: [282],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Overflowing Wishes",
			fr: "Vœux Débordants",
			de: "Überquellende Wünsche",
			it: "Desideri Straripanti",
			es: "Deseos Desbordantes",
			pt: "Desejos Transbordantes",
			'es-mx': "Deseos Abundantes"
		},

		effect: {
			en: "For each of your Benched Pokémon, search your deck for a Basic {P} Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie {P} de base, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			de: "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Basis-{P}-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {P} per ciascuno dei Pokémon nella tua panchina e assegnala a quel Pokémon. Poi rimischia il tuo mazzo.",
			es: "Para cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta de Energía {P} Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Para cada um dos seus Pokémon no Banco, procure por uma carta de Energia {P} Básica no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Por cada uno de tus Pokémon en Banca, busca en tu mazo 1 carta de Energía {P} Básica y únela a ese Pokémon. Después, baraja tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Mega Symphonia",
			fr: "Méga Symphonie",
			de: "Mega-Symphonia",
			it: "Megasinfonia",
			es: "Megasinfonía",
			pt: "Megassinfonia",
			'es-mx': "Megasinfonía"
		},

		effect: {
			en: "This attack does 50 damage for each {P} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie {P} attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {P}-Energie 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni Energia {P} assegnata ai tuoi Pokémon.",
			es: "Este ataque hace 50 puntos de daño por cada Energía {P} unida a cada uno de tus Pokémon.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia {P} ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada Energía {P} unida a cada uno de tus Pokémon."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654498,
		cardmarket: 851230
	}
}

export default card