import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
				'es-es': "Fortaleza",
				'it-it': "Rafforzatore",
				'pt-br': "Endurecer",
				'de-de': "Härtner"
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon fuera a resultar dañado por un ataque, evita el daño infligido por ese ataque a este Pokémon si el daño es de 60 puntos o menos.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon sta per essere danneggiato da un attacco, previeni i danni di quell'attacco inflitti a questo Pokémon se quei danni sono 60 o meno.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon estiver prestes a sofrer danos causados por um ataque, impedirá os danos causados pelo ataque a esse Pokémon se eles forem 60 ou menos.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 60 oder weniger Schadenspunkte zugefügt werden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Gilete",
				'de-de': "Rasierblatt"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives deep in forests. With the leaf on its head, it makes a flute whose song makes listeners uneasy.",
	},

	thirdParty: {
		cardmarket: 291517,
		tcgplayer: 120999
	}
}

export default card
