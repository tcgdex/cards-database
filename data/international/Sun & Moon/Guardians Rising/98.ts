import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
		'es-es': "Jangmo-o",
		'it-it': "Jangmo-o",
		'pt-br': "Jangmo-o",
		'de-de': "Miniras"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bulletproof",
				'fr-fr': "Pare-Balles",
				'es-es': "Antibalas",
				'it-it': "Antiproiettile",
				'pt-br': "Blindado",
				'de-de': "Kugelsicher"
			},
			effect: {
				'en-us': "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 10 dégâts de moins provenant des attaques(après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 10 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It expresses its feelings by smacking its scales. Metallic sounds echo through the tall mountains where Jangmo-o lives.",
	},

	thirdParty: {
		cardmarket: 297552,
		tcgplayer: 131014
	}
}

export default card
