import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "chibi",

	attacks: [{
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Fairy Wind",
			de: "Feenbrise"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Double Spin",
			fr: "Double Tour",
			es: "Doble Giro",
			it: "Doppioturbo",
			pt: "Double Spin",
			de: "Doppeldreher"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Flip 2 coins. This attack does 50 damage for each heads.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	description: {
		en: "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed."
	},

	dexId: [670],
	regulationMark: "E"
}

export default card