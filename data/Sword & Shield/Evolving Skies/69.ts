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
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "nagimiso",

	attacks: [{
		name: {
			en: "Synchro Woofer",
			fr: "Fréquence Synchro",
			es: "Frecuencia Sincronizada",
			it: "Sincrowoofer",
			pt: "Synchro Woofer",
			de: "Synchro-Woofer"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Psychic"]
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

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},

	description: {
		en: "The auspicious shape of this Pokémon’s nose apparently led some regions to consider Swoobat a symbol of good luck."
	},

	dexId: [528]
}

export default card