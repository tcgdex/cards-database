import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Noivern V",
		fr: "Bruyverne V",
		es: "Noivern V",
		it: "Noivern V",
		pt: "Noivern V",
		de: "UHaFnir V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Ayaka Yoshida",

	attacks: [{
		name: {
			en: "Boomburst",
			fr: "Bang Sonique",
			es: "Estruendo",
			it: "Ondaboato",
			pt: "Boomburst",
			de: "Überschallknall"
		},

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Synchro Loud",
			fr: "Synchro Sonore",
			es: "Sincronización Ruidosa",
			it: "Sincrochiasso",
			pt: "Synchro Loud",
			de: "Synchrokrach"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 120 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 0,
	dexId: [715],
	regulationMark: "E",
	suffix: "V"
}

export default card
