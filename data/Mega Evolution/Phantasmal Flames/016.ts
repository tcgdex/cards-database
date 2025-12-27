import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		'es-mx': "Darmanitan",
		de: "Flampivian",
		it: "Darmanitan",
		pt: "Darmanitan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [555],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blaze Ball",
			fr: "Balle Incendiaire",
			es: "Bola Ascuas",
			'es-mx': "Bola Ígnea",
			de: "Brandball",
			it: "Pallafuoco",
			pt: "Bola de Fogo"
		},

		effect: {
			en: "This attack does 40 more damage for each {R} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {R} ligada a este Pokémon."
		},

		damage: "40+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857591
	}
}

export default card