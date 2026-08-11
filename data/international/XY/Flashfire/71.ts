import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
		'es-es': "Dragalge",
		'it-it': "Dragalge",
		'pt-br': "Dragalge",
		'de-de': "Tandrak"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Barrier",
				'fr-fr': "Barrière de Poison",
				'es-es': "Barrera Veneno",
				'it-it': "Velenobarriera",
				'pt-br': "Barreira de Veneno",
				'de-de': "Gifthülle"
			},
			effect: {
				'en-us': "Your opponent's Poisoned Pokémon can't retreat.",
				'fr-fr': "Les Pokémon Empoisonnés de votre adversaire ne peuvent pas battre en retraite.",
				'es-es': "Los Pokémon Envenenados de tu rival no pueden retirarse.",
				'it-it': "I Pokémon avvelenati del tuo avversario non possono ritirarsi.",
				'pt-br': "O Pokémon Envenenado do seu oponente não poderá recuar.",
				'de-de': "Die vergifteten Pokémon deines Gegners können sich nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine Empoisonnée",
				'es-es': "Aliento Venenoso",
				'it-it': "Velenospiro",
				'pt-br': "Hálito Venenoso",
				'de-de': "Gifthauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their poison is strong enough to eat through the hull of a tanker, and they spit it indiscriminately at anything that enters their territory.",
	},

	thirdParty: {
		cardmarket: 281554,
		tcgplayer: 91208
	}
}

export default card
