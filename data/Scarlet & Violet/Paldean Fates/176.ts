import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Nacli",
		fr: "Selutin",
		es: "Nacli",
		it: "Nacli",
		pt: "Nacli",
		de: "Geosali"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Salt Coating",
			fr: "Couche de Sel",
			es: "Recubrimiento Salino",
			it: "Copertura di Sale",
			pt: "Camada de Sal",
			de: "Salzbeschichtung"
		},

		effect: {
			en: "Heal 20 damage from 1 of your Pokémon.",
			fr: "Soignez 20 dégâts de l'un de vos Pokémon.",
			es: "Cura 20 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano de 1 dos seus Pokémon.",
			de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card