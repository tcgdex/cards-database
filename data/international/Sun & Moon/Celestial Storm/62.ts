import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sunbeam",
				'fr-fr': "Rayon de Soleil",
				'es-es': "Rayo de Sol",
				'it-it': "Raggio di Sole",
				'pt-br': "Raio de Sol",
				'de-de': "Sonnenstrahl"
			},
			effect: {
				'en-us': "The maximum HP of each of your Lunatone in play is 130.",
				'fr-fr': "Les PV maximum de chacun de vos Séléroc en jeu sont de 130.",
				'es-es': "Los PS máximos de cada uno de tus Lunatone en juego son 130.",
				'it-it': "I PS massimi di ognuno dei tuoi Lunatone in gioco diventano 130.",
				'pt-br': "O PS máximo de cada Lunatone seu em jogo é 130.",
				'de-de': "Die maximalen KP jedes deiner Lunastein im Spiel betragen 130."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scorching Light",
				'fr-fr': "Lumière Aveuglante",
				'es-es': "Luz Desoladora",
				'it-it': "Luce Ustionante",
				'pt-br': "Luz Abrasadora",
				'de-de': "Versengendes Licht"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed. If tails, your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato. Se esce croce, il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente será Queimado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It absorbs solar energy during the day. Always expressionless, it can sense what its foe is thinking.",
	},

	thirdParty: {
		cardmarket: 361307,
		tcgplayer: 170883
	}
}

export default card
