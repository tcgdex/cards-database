import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
		es: "Seedot",
		it: "Seedot",
		pt: "Seedot",
		de: "Samurzel"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hang Down",
				fr: "Suspension",
				es: "Prender",
				it: "Tirar Giù",
				pt: "Dependurar",
				de: "Herunterhängen"
			},

			damage: 10,

		},
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
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques dont le montant des dégâts est de 40 ou moins.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques si el daño es de 40 puntos o menos.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 40 o meno.",
				pt: "Durante a próxima vez de jogar do seu oponente, prevenirá todo dano causado a este Pokémon por ataques se aquele dano for 40 ou menos.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 40 Schadenspunkte oder weniger beträgt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361258
	}
}

export default card
