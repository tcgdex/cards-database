import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Darumaka",
		fr: "Darumarond",
		es: "Darumaka",
		'es-mx': "Darumaka",
		de: "Flampion",
		it: "Darumaka",
		pt: "Darumaka"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [554],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

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
			en: "This attack does 20 more damage for each {R} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {R} ligada a este Pokémon."
		},

		damage: "10+"
	}],

	retreat: 2,
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
		cardmarket: 857590,
		tcgplayer: 662147
	}
}

export default card