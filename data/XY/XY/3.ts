import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Munch",
				fr: "Mange-Feuille",
				es: "Mascahojas",
				it: "Mangifoglia",
				pt: "Mastigar Folhas",
				de: "Laubmampfer"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Grass, este ataque hace 20 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Grass, questo attacco infligge 20 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Grass, esse ataque causará 20 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Grass-Pokémon ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281340,
		tcgplayer: 90548
	}
}

export default card
