import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [268],
	set: Set,

	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
		'de-de': "Panekon"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Harden",
			'fr-fr': "Armure",
			'es-es': "Fortaleza",
			'it-it': "Rafforzatore",
			'pt-br': "Endurecer",
			'de-de': "Härtner"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 60 or less.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques dont les dégâts sont de 60 ou moins.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques si el daño es de 60 puntos o menos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 60 o meno.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 60 ou menos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 60 Schadenspunkte oder weniger beträgt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674020,
				tcgplayer: 283873
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674020,
				tcgplayer: 283873
			}
		},
	],
}

export default card
