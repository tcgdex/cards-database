import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [268],
	set: Set,

	name: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		it: "Cascoon",
		pt: "Cascoon",
		de: "Panekon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		it: "Wurmple",
		pt: "Wurmple",
		de: "Waumpel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Harden",
			fr: "Armure",
			es: "Fortaleza",
			it: "Rafforzatore",
			pt: "Endurecer",
			de: "Härtner"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 60 or less.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques dont les dégâts sont de 60 ou moins.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques si el daño es de 60 puntos o menos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco se quei danni sono 60 o meno.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se aquele dano for 60 ou menos.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird, wenn jener Schaden 60 Schadenspunkte oder weniger beträgt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674020
	}
}

export default card
