import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [648],
	set: Set,

	name: {
		en: "Meloetta ex",
		fr: "Meloetta-ex",
		de: "Meloetta-ex",
		it: "Meloetta-ex",
		pt: "Meloetta ex",
		es: "Meloetta ex",
		'es-mx': "Meloetta ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Debut Performance",
			fr: "Première Performance",
			de: "Erstaufführung",
			it: "Performance di Debutto",
			pt: "Primeira Performance",
			es: "Actuación Inaugural",
			'es-mx': "Debut Artístico"
		},

		effect: {
			en: "If you go first, this Pokémon can use attacks during your first turn.",
			fr: "Si vous jouez en premier, ce Pokémon peut utiliser des attaques pendant votre premier tour.",
			de: "Wenn du als Erster am Zug bist, kann dieses Pokémon während deines ersten Zuges Attacken einsetzen.",
			it: "Se inizi per primo, questo Pokémon può usare attacchi durante il tuo primo turno.",
			pt: "Se você for o primeiro a jogar, este Pokémon poderá usar ataques durante o seu primeiro turno.",
			es: "Si sales en primer lugar, este Pokémon puede usar ataques durante tu primer turno.",
			'es-mx': "Si sales en primer lugar, este Pokémon puede usar ataques durante tu primer turno."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Echoed Voice",
			fr: "Écho",
			de: "Widerhall",
			it: "Echeggiavoce",
			pt: "Voz Ecoante",
			es: "Eco Voz",
			'es-mx': "Eco Voz"
		},

		effect: {
			en: "During your next turn, this Pokémon's Echoed Voice attack does 80 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il tuo prossimo turno, l'attacco Echeggiavoce di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Voz Ecoante deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			es: "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia)."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835996
			}
		}
	]
}

export default card
