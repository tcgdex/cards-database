import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		en: "Beheeyem",
		fr: "Neitram",
		de: "Megalon",
		it: "Beheeyem",
		pt: "Beheeyem",
		es: "Beheeyem",
		'es-mx': "Beheeyem"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
		de: "Pygraulon",
		it: "Elgyem",
		pt: "Elgyem",
		es: "Elgyem",
		"es-mx": "Elgyem"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Calm Mind",
			fr: "Plénitude",
			de: "Gedankengut",
			it: "Calmamente",
			pt: "Mente Calma",
			es: "Paz Mental",
			'es-mx': "Paz Mental"
		},

		effect: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts de ce Pokémon.",
			de: "Heile 40 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 40 danni.",
			pt: "Cure 40 pontos de dano deste Pokémon.",
			es: "Cura 40 puntos de daño a este Pokémon.",
			'es-mx': "Cura 40 puntos de daño a este Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			it: "Psichico",
			pt: "Psíquico",
			es: "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836156
	}
}

export default card