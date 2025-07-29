import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		pt: "Grumpig",
		de: "Groink"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Own Tempo",
				fr: "Tempo Perso",
				es: "Ritmo Propio",
				it: "Mente Locale",
				pt: "Ritmo Próprio",
				de: "Tempomacher"
			},
			effect: {
				en: "This Pokémon can’t be Confused.",
				fr: "Ce Pokémon ne peut pas être Confus.",
				es: "Este Pokémon no puede pasar a estar Confundido.",
				it: "Questo Pokémon non può venire confuso.",
				pt: "Este Pokémon não pode ser Confundido.",
				de: "Dieses Pokémon kann nicht verwirrt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
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
				en: "During your next turn, this Pokémon’s Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Psicamisù di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 311892
	}
}

export default card
