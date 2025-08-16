import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [333],
	set: Set,

	name: {
		en: "Swablu",
		fr: "Tylton",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		de: "Wablu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

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
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Jiro Sasumo",

	thirdParty: {
		cardmarket: 740692
	}
}

export default card