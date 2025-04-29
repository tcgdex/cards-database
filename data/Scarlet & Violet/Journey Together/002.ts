import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		de: "Safcon",
		it: "Metapod",
		pt: "Metapod",
		'es-mx': "Metapod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Harden",
			fr: "Armure",
			es: "Fortaleza",
			de: "Härtner",
			it: "Rafforzatore",
			pt: "Endurecer",
			'es-mx': "Fortaleza"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 60 or less.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont de 60 ou moins.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques si ese daño es de 60 puntos o menos.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 60 Schadenspunkte oder weniger beträgt.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 60 o meno.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 60 ou menos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques a este Pokémon si ese daño es de 60 puntos o menos."
		}
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
