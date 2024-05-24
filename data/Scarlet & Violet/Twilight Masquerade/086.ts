import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bind Wound",
			fr: "Blessure Pansée",
			es: "Vendar Herida",
			it: "Cura Ferite",
			pt: "Ligar Ferida",
			de: "Wunden verbinden"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Vento de Fada",
			de: "Feenbrise"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card