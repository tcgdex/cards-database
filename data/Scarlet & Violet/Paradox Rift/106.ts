import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Flamigo",
		fr: "Flamenroule",
		es: "Flamigo",
		it: "Flamigo",
		pt: "Flamigo",
		de: "Flaminkno"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Combat Beak",
			fr: "Bec Combatif",
			es: "Pico Combate",
			it: "Combattibecco",
			pt: "Bico de Combate",
			de: "Gefechtsschnabel"
		},

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card