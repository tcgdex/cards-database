import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Spearow",
		fr: "Piafabec",
		es: "Spearow",
		it: "Spearow",
		pt: "Spearow",
		de: "Habitak"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck Bugs",
				fr: "Picore Insectes",
				es: "Picotazos a Insectos",
				it: "Becchinsetto",
				pt: "Bicando Insetos",
				de: "Insektenleser"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Grass Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Grass, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Grass, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Grass, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Grass-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 295408,
		tcgplayer: 126969
	}
}

export default card
