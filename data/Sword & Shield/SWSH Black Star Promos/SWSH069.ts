import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
	},

	illustrator: "kodama",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Gust",
			de: "Windstoß"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Wind Pressure",
			fr: "Pression Éolienne",
			es: "Presión Eólica",
			it: "Pressione Ventosa",
			pt: "Wind Pressure",
			de: "Winddruck"
		},

		effect: {
			en: "If your opponent has 5 or fewer cards in their hand, this attack does nothing.",
			fr: "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque ne fait rien.",
			es: "Si tu rival tiene 5 o menos cartas en su mano, este ataque no hace nada.",
			it: "Se il tuo avversario ha cinque o meno carte in mano, questo attacco non ha effetto.",
			pt: "If your opponent has 5 or fewer cards in their hand, this attack does nothing.",
			de: "Wenn dein Gegner 5 oder weniger Karten auf seiner Hand hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 250,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	stage: "Basic",
	dexId: [249],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
