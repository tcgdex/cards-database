import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo",
		de: "Keldeo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Line Force",
			fr: "Force Linéaire",
			es: "Fuerza Lineal",
			it: "Schieraforza",
			pt: "Força Linear",
			de: "Gebündelte Kraft"
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no seu Banco.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card