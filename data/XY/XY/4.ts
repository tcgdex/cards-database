import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
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
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				es: "Fortaleza",
				it: "Rafforzatore",
				pt: "Endurecer",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
				es: "Durante el próximo turno de tu rival, si este Pokémon fuera a resultar dañado por un ataque, evita el daño infligido por ese ataque a este Pokémon si el daño es de 60 puntos o menos.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon sta per essere danneggiato da un attacco, previeni il danno di quell'attacco inflitto a questo Pokémon se quel danno è 60 o meno.",
				pt: "Durante a próxima vez de jogar do seu oponente, se esse Pokémon estiver prestes a sofrer danos causados por um ataque, impedirá os danos causados pelo ataque a esse Pokémon se eles forem 60 ou menos.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 60 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
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

	thirdParty: {
		cardmarket: 281341
	}
}

export default card
