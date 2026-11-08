import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'fr-fr': "Charmilly VMAX",
		'en-us': "Alcremie VMAX",
		'es-es': "Alcremie VMAX",
		'it-it': "Alcremie VMAX",
		'pt-br': "Alcremie VMAX",
		'de-de': "Pokusan VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Charmilly-V",
		'en-us': "Alcremie V"
	},

	attacks: [{
		name: {
			'fr-fr': "Décoration",
			'en-us': "Adornment",
			'es-es': "Adorno",
			'it-it': "Ornamento",
			'pt-br': "Decoração",
			'de-de': "Zierde"
		},

		effect: {
			'fr-fr': "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			'en-us': "For each of your Benched Pokémon, search your deck for a Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			'es-es': "Por cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta de Energía Psychic y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Psychic per ogni Pokémon nella tua panchina e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada um dos seus Pokémon no Banco, procure por 1 carta de Energia Psychic no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Psychic-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Fouet G-Max",
			'en-us': "G-Max Whisk",
			'es-es': "Gigabatidora",
			'it-it': "Gigafrusta",
			'pt-br': "Batedeira G-Max",
			'de-de': "Giga-Rührbesen"
		},

		effect: {
			'fr-fr': "Défaussez autant d'Énergies que vous voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'en-us': "Discard any amount of Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'es-es': "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 539388,
				tcgplayer: 232525
			}
		},
	],
}

export default card
