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
		en: "Trevenant V",
		fr: "Desséliande V",
		es: "Trevenant V",
		it: "Trevenant V",
		pt: "Trevenant V",
		de: "Trombork V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "MUGENUP",

	attacks: [{
		name: {
			en: "Absorb Life",
			fr: "Absorption",
			es: "Absorber Vida",
			it: "Spolpavita",
			pt: "Absorb Life",
			de: "Lebensverkoster"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Heal 30 damage from this Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Shadow Claw",
			fr: "Griffe Ombre",
			es: "Garra Umbría",
			it: "Ombrartigli",
			pt: "Shadow Claw",
			de: "Dunkelklaue"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Discard a random card from your opponent's hand.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	dexId: [709],
	regulationMark: "E",
	suffix: "V"
}

export default card
