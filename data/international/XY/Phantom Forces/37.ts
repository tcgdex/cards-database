import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'es-es': "Gulpin",
		'it-it': "Gulpin",
		'pt-br': "Gulpin",
		'de-de': "Schluppuck"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		316,
	],

	hp: 60,

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
				'en-us': "Poison Gas",
				'fr-fr': "Gaz Toxik",
				'es-es': "Gas Venenoso",
				'it-it': "Velenogas",
				'pt-br': "Gás Venenoso",
				'de-de': "Giftwolke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
				'es-es': "Bomba Lodo",
				'it-it': "Fangobomba",
				'pt-br': "Bomba de Lodo",
				'de-de': "Matschbombe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a small heart and brain. Its stomach compromises most of its body, with enzymes to dissolve anything.",
	},

	thirdParty: {
		cardmarket: 281843,
		tcgplayer: 94235
	}
}

export default card
