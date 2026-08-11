import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It loves to drink other creatures' blood. It's said that if it finds others of its kind going hungry, it sometimes shares the blood it's gathered.",
	},


	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'es-mx': "Golbat",
		'de-de': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zubat"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Covert Flight",
			'fr-fr': "Vol à Couvert",
			'es-es': "Vuelo Encubierto",
			'es-mx': "Vuelo Encubierto",
			'de-de': "Tarnflug",
			'it-it': "Volo Segreto",
			'pt-br': "Voo Discreto"
		},

		cost: ["Darkness"],
		damage: 30,

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886442,
				tcgplayer: 693493
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886442,
				tcgplayer: 693493
			}
		},
	],
}

export default card
