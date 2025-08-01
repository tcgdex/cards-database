import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Venipede",
		fr: "Venipatte",
		es: "Venipede",
		it: "Venipede",
		pt: "Venipede",
		de: "Toxiped"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		543,
	],

	hp: 70,

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
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 40 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

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
		cardmarket: 299460
	}
}

export default card
