import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		it: "Barbaracle",
		pt: "Barbaracle",
		de: "Thanathora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		it: "Binacle",
		pt: "Binacle",
		de: "Bithora"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lost Block",
			fr: "Bloc Perdu",
			es: "Bloqueo Perdido",
			it: "Blocco Perduto",
			pt: "Bloqueio Perdido",
			de: "Nirgendwo-Blockade"
		},

		effect: {
			en: "Your opponent puts any Prize cards they would take in the Lost Zone instead of into their hand.",
			fr: "Votre adversaire place toute carte Récompense qu'il récupérerait dans la Zone Perdue plutôt que dans sa main.",
			es: "Tu rival pone en la Zona Perdida, en vez de en su mano, cualquier carta de Premio que fuera a coger.",
			it: "Il tuo avversario mette qualsiasi carta Premio che avrebbe preso nell'area perduta, invece che nella propria mano.",
			pt: "Seu oponente coloca quaisquer cartas de Prêmio que ele(a) pegaria na Zona Perdida ao invés da própria mão.",
			de: "Dein Gegner legt alle Preiskarten, die er auf seine Hand nehmen würde, stattdessen ins Nirgendwo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Chop",
			fr: "Coupe Dynamique",
			es: "Golpe Dinámico",
			it: "Dinamicolpo",
			pt: "Golpe Dinâmico",
			de: "Wuchthieb"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card