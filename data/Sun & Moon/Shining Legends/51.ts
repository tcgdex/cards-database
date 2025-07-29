import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Head",
				fr: "Tête Dangereuse",
				es: "Cabeza Peligrosa",
				it: "Rischio Testata",
				pt: "Cabeça Perigosa",
				de: "Gefährlicher Kopf"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 302189
	}
}

export default card
