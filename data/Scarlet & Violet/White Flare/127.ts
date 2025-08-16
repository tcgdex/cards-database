import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [524],
	set: Set,

	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
		de: "Kiesling",
		it: "Roggenrola",
		pt: "Roggenrola",
		es: "Roggenrola",
		'es-mx': "Roggenrola"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Harden",
			fr: "Armure",
			de: "Härtner",
			it: "Rafforzatore",
			pt: "Endurecer",
			es: "Fortaleza",
			'es-mx': "Fortaleza"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont de 40 ou moins.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 40 Schadenspunkte oder weniger beträgt.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 40 o meno.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 40 ou menos.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques si ese daño es de 40 puntos o menos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques a este Pokémon si ese daño es de 40 puntos o menos."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
			de: "Rollende Steine",
			it: "Massi Rotolanti",
			pt: "Pedras Rolantes",
			es: "Rocas Rodantes",
			'es-mx': "Rocas Rodantes"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835986
	}
}

export default card