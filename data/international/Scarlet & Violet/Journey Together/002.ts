import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [11],
	set: Set,

	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'de-de': "Safcon",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'es-mx': "Metapod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'de-de': "Raupy",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'es-mx': "Caterpie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Harden",
			'fr-fr': "Armure",
			'es-es': "Fortaleza",
			'de-de': "Härtner",
			'it-it': "Rafforzatore",
			'pt-br': "Endurecer",
			'es-mx': "Fortaleza"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 60 or less.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont de 60 ou moins.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques si ese daño es de 60 puntos o menos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 60 Schadenspunkte oder weniger beträgt.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 60 o meno.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 60 ou menos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques a este Pokémon si ese daño es de 60 puntos o menos."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "OKUBO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817154,
				tcgplayer: 623429
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817154,
				tcgplayer: 623429
			}
		},
	],
}

export default card
