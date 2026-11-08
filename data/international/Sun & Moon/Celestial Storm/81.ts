import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'es-es': "Groudon",
		'it-it': "Groudon",
		'pt-br': "Groudon",
		'de-de': "Groudon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wreck",
				'fr-fr': "Anéantissement",
				'es-es': "Naufragio",
				'it-it': "Demolitore",
				'pt-br': "Destruir",
				'de-de': "Abreißen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 50 more damage. Then, discard that Stadium card.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 50 puntos de daño más. Después, descarta esa carta de Estadio.",
				'it-it': "Se c’è in gioco una carta Stadio, questo attacco infligge 50 danni in più. Poi scarta quella carta Stadio.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 50 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 50 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ground Slash",
				'fr-fr': "Tranch’Sol",
				'es-es': "Tajo al Suelo",
				'it-it': "Laceraterra",
				'pt-br': "Talho do Solo",
				'de-de': "Bodennaher Schlitzer"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "This legendary Pokémon is said to represent the land. It went to sleep after dueling Kyogre.",
	},

	thirdParty: {
		cardmarket: 361326,
		tcgplayer: 170903
	}
}

export default card
