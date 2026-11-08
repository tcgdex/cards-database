import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Polteageist",
		'fr-fr': "Polthégeist",
		'es-es': "Polteageist",
		'it-it': "Polteageist",
		'pt-br': "Polteageist",
		'de-de': "Mortipot"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Sinistea",
		'fr-fr': "Théffroi",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teatime",
				'fr-fr': "Thérémonie",
				'es-es': "Hora del Té",
				'it-it': "Ora del Tè",
				'pt-br': "Hora do Chá",
				'de-de': "Teatime"
			},
			effect: {
				'en-us': "Each player draws 2 cards.",
				'fr-fr': "Chaque joueur pioche 2 cartes.",
				'es-es': "Cada jugador roba 2 cartas.",
				'it-it': "Ciascun giocatore pesca due carte.",
				'pt-br': "Cada jogador compra 2 cartas.",
				'de-de': "Jeder Spieler zieht 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'es-es': "Poltergeist",
				'it-it': "Poltergeist",
				'pt-br': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
				'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
				'pt-br': "Seu oponente revela a própria mão. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This species lives in antique teapots. Most pots are forgeries, but on rare occasions, an authentic work is found."
	},

	dexId: [855],

	thirdParty: {
		cardmarket: 436574,
		tcgplayer: 208399
	}
}

export default card
