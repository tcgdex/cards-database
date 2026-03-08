import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [929],
	set: Set,

	name: {
		en: "Dolliv",
		fr: "Olivado",
		de: "Olivinio",
		it: "Dolliv",
		es: "Dolliv",
		pt: "Dolliv",
		'es-mx': "Dolliv"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		en: "Smoliv",
		fr: "Olivini",
		de: "Olini",
		it: "Smoliv",
		es: "Smoliv",
		pt: "Smoliv",
		'es-mx': "Smoliv"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Nutrients",
			fr: "Nutriments",
			de: "Nährstoffe",
			it: "Nutrienti",
			es: "Nutrientes",
			pt: "Nutrientes",
			'es-mx': "Nutrientes"
		},

		effect: {
			en: "Heal 40 damage from 1 of your Pokémon.",
			fr: "Soignez 40 dégâts de l'un de vos Pokémon.",
			de: "Heile 40 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 40 danni.",
			es: "Cura 40 puntos de daño a uno de tus Pokémon.",
			pt: "Cure 40 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Cura 40 puntos de daño a 1 de tus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825896
	}
}

export default card
