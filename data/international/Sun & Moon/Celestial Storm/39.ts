import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
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
				'en-us': "Wave Swallower",
				'fr-fr': "Dévoreur de Vagues",
				'es-es': "Tragaolas",
				'it-it': "Trangugiaonde",
				'pt-br': "Engolidor de Ondas",
				'de-de': "Wellenschlucker"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, heal 50 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, soignez 50 dégâts à ce Pokémon.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, cura 50 puntos de daño a este Pokémon.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, cura questo Pokémon da 50 danni.",
				'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, cure 50 pontos de dano deste Pokémon.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Heile pro Kopf 50 Schadenspunkte bei diesem Pokémon."
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

	description: {
		'en-us': "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
	},

	thirdParty: {
		cardmarket: 361286,
		tcgplayer: 170856
	}
}

export default card
