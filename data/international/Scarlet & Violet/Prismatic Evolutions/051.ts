import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario ex",
		'fr-fr': "Lucario-ex",
		'es-es': "Lucario ex",
		'pt-br': "Lucario ex",
		'it-it': "Lucario-ex",
		'de-de': "Lucario-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'it-it': "Riolu",
		'de-de': "Riolu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Aura Uppercut",
			'fr-fr': "Uppercut Aura",
			'es-es': "Gancho Aura",
			'pt-br': "Gancho de Aura",
			'it-it': "Auramontante",
			'de-de': "Aura-Uppercut"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Tornado Rush",
			'fr-fr': "Ruée Tornade",
			'es-es': "Tornado Raudo",
			'pt-br': "Arremetida Tornado",
			'it-it': "Tornadoraffica",
			'de-de': "Tornadoansturm"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Tornado Rush attack does 100 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Ruée Tornade de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Tornado Raudo de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o seu próximo turno, o ataque Arremetida Tornado deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Tornadoraffica di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Tornadoansturm dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "PLANETA Tsuji",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805440,
				tcgplayer: 610406
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 845429,
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 845430,
			}
		},
	],
}

export default card
