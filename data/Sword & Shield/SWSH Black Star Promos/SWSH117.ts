import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	},

	stage: "Basic",

	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy",
		es: "Phanpy",
		pt: "Phanpy",
		it: "Phanpy"
	},

	rarity: "None",
	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			es: "Estampida",
			pt: "Estouro",
			it: "Fuggi Fuggi"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Strike Back",
			fr: "Vengeur",
			de: "Kontern",
			es: "Contraimpacto",
			pt: "Revidar",
			it: "Risposta"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu.",
			es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card