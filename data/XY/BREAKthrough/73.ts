import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Elgyem",
		fr: "Lewsor",
		es: "Elgyem",
		it: "Elgyem",
		pt: "Elgyem",
		de: "Pygraulon"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		605,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
				es: "Más Psique",
				it: "Psicamisù",
				pt: "Carga Psíquica",
				de: "Psycho-Plus"
			},
			effect: {
				en: "During your next turn, this Pokémon's Psych Up attack does 20 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 20 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Psicamisù di questo Pokémon infligge 20 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 20 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286319,
		tcgplayer: 107192
	}
}

export default card
