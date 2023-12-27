import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Rampardos",
		fr: "Charkos",
		es: "Rampardos",
		it: "Rampardos",
		pt: "Rampardos",
		de: "Rameidon"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
		es: "Cranidos",
		it: "Cranidos",
		pt: "Cranidos",
		de: "Koknodon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Jurassic Hammer",
			fr: "Marteau Jurassique",
			es: "Martillo Jurásico",
			it: "Martello Giurassico",
			pt: "Martelo Jurássico",
			de: "Jurahammer"
		},

		effect: {
			en: "If your opponent has 3 or fewer cards in their hand, this attack does nothing.",
			fr: "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque ne fait rien.",
			es: "Si tu rival tiene 3 cartas o menos en su mano, este ataque no hace nada.",
			it: "Se il tuo avversario ha tre o meno carte in mano, questo attacco non ha effetto.",
			pt: "Se o seu oponente tiver 3 ou menos cartas na própria mão, este ataque não fará nada.",
			de: "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
