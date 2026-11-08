import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
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
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon sta per essere danneggiato da un attacco, previeni il danno di quell'attacco inflitto a questo Pokémon se quel danno è 60 o meno.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se esse Pokémon estiver prestes a sofrer danos causados por um ataque, impedirá os danos causados pelo ataque a esse Pokémon se eles forem 60 ou menos.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 60 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
	},

	thirdParty: {
		cardmarket: 281341,
		tcgplayer: 86417
	}
}

export default card
