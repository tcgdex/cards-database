import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		en: "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Explosive Discontent",
			fr: "Mécontentement Explosif",
			de: "Stinksaure Explosion",
			es: "Descontento Explosivo",
			pt: "Desagrado Explosivo",
			it: "Malcontento Esplosivo"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu.",
			es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582502
	}
}

export default card