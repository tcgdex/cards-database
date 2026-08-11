import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Alcremie VMAX",
		'fr-fr': "Charmilly VMAX",
		'es-es': "Alcremie VMAX",
		'it-it': "Alcremie VMAX",
		'pt-br': "Alcremie VMAX",
		'de-de': "Pokusan VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [869],
	set: Set,
	hp: 310,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Alcremie V",
		'fr-fr': "Charmilly-V"
	},

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	attacks: [{
		name: {
			'en-us': "Adornment",
			'fr-fr': "Décoration",
			'es-es': "Adorno",
			'it-it': "Ornamento",
			'pt-br': "Decoração",
			'de-de': "Zierde"
		},

		effect: {
			'en-us': "For each of your Benched Pokémon, search your deck for a Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			'fr-fr': "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			'es-es': "Por cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta de Energía Psychic y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Psychic per ogni Pokémon nella tua panchina e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada um dos seus Pokémon no Banco, procure por 1 carta de Energia Psychic no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Psychic-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "G-Max Whisk",
			'fr-fr': "Fouet G-Max",
			'es-es': "Gigabatidora",
			'it-it': "Gigafrusta",
			'pt-br': "Batedeira G-Max",
			'de-de': "Giga-Rührbesen"
		},

		effect: {
			'en-us': "Discard any amount of Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez autant d'Énergies que vous voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 499970,
		tcgplayer: 223016
	}
}

export default card
