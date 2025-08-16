import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [911],
	set: Set,

	name: {
		fr: "Flâmigator-ex",
		en: "Skeledirge ex",
		es: "Skeledirge ex",
		it: "Skeledirge-ex",
		pt: "Skeledirge ex",
		de: "Skelokrok-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Chant Vitalité",
			en: "Vitality Song",
			es: "Canto Vitalidad",
			it: "Canto del Vigore",
			pt: "Canção de Vitalidade",
			de: "Vitalitätsgesang"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
			en: "Heal 30 damage from each of your Pokémon.",
			es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Voix Brûlante",
			en: "Burning Voice",
			es: "Voz Abrasadora",
			it: "Bruciavoce",
			pt: "Voz Abrasadora",
			de: "Brennende Stimme"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "270-"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "kantaro",

	thirdParty: {
		cardmarket: 715511
	}
}

export default card