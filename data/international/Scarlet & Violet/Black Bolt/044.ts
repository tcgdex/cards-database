import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [648],
	set: Set,

	name: {
		'en-us': "Meloetta ex",
		'fr-fr': "Meloetta-ex",
		'de-de': "Meloetta-ex",
		'it-it': "Meloetta-ex",
		'pt-br': "Meloetta ex",
		'es-es': "Meloetta ex",
		'es-mx': "Meloetta ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Debut Performance",
			'fr-fr': "Première Performance",
			'de-de': "Erstaufführung",
			'it-it': "Performance di Debutto",
			'pt-br': "Primeira Performance",
			'es-es': "Actuación Inaugural",
			'es-mx': "Debut Artístico"
		},

		effect: {
			'en-us': "If you go first, this Pokémon can use attacks during your first turn.",
			'fr-fr': "Si vous jouez en premier, ce Pokémon peut utiliser des attaques pendant votre premier tour.",
			'de-de': "Wenn du als Erster am Zug bist, kann dieses Pokémon während deines ersten Zuges Attacken einsetzen.",
			'it-it': "Se inizi per primo, questo Pokémon può usare attacchi durante il tuo primo turno.",
			'pt-br': "Se você for o primeiro a jogar, este Pokémon poderá usar ataques durante o seu primeiro turno.",
			'es-es': "Si sales en primer lugar, este Pokémon puede usar ataques durante tu primer turno.",
			'es-mx': "Si sales en primer lugar, este Pokémon puede usar ataques durante tu primer turno."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Echoed Voice",
			'fr-fr': "Écho",
			'de-de': "Widerhall",
			'it-it': "Echeggiavoce",
			'pt-br': "Voz Ecoante",
			'es-es': "Eco Voz",
			'es-mx': "Eco Voz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 80 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Echeggiavoce di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Voz Ecoante deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'es-es': "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
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
				cardmarket: 835996,
				tcgplayer: 642496
			}
		}
	]
}

export default card
