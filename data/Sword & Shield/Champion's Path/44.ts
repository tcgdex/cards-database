import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack from Behind",
				fr: "Attaque Traîtresse",
				es: "Ataque por Detrás",
				it: "Attacco alle Spalle",
				pt: "Ataque por Trás",
				de: "Hinterhältiger Angriff"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
