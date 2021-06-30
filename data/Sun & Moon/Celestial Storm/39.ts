import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		320,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Wave Swallower",
				fr: "Dévoreur de Vagues",
				es: "Tragaolas",
				it: "Trangugiaonde",
				pt: "Engolidor de Ondas",
				de: "Wellenschlucker"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, heal 50 damage from this Pokémon.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, soignez 50 dégâts à ce Pokémon.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, cura 50 puntos de daño a este Pokémon.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, cura questo Pokémon da 50 danni.",
				pt: "Jogue 1 moeda até sair coroa. Para cada cara, cure 50 pontos de dano deste Pokémon.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Heile pro Kopf 50 Schadenspunkte bei diesem Pokémon."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
