import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [524],
	set: Set,

	name: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'de-de': "Kiesling",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'es-es': "Roggenrola",
		'es-mx': "Roggenrola"
	},

	illustrator: "Yuriko Akase",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Harden",
			'fr-fr': "Armure",
			'de-de': "Härtner",
			'it-it': "Rafforzatore",
			'pt-br': "Endurecer",
			'es-es': "Fortaleza",
			'es-mx': "Fortaleza"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont de 40 ou moins.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 40 Schadenspunkte oder weniger beträgt.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 40 o meno.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 40 ou menos.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques si ese daño es de 40 puntos o menos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques a este Pokémon si ese daño es de 40 puntos o menos."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rolling Rocks",
			'fr-fr': "Rochers Roulants",
			'de-de': "Rollende Steine",
			'it-it': "Massi Rotolanti",
			'pt-br': "Pedras Rolantes",
			'es-es': "Rocas Rodantes",
			'es-mx': "Rocas Rodantes"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836143,
				tcgplayer: 642240
			}
		},
	],
}

export default card
