import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Enzyme",
				'fr-fr': "Enzyme Empoisonnée",
				'es-es': "Enzima Venenosa",
				'it-it': "Velenenzima",
				'pt-br': "Enzima Venenosa",
				'de-de': "Giftenzyme"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Poisoned Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Empoisonnés de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Envenenados de tu rival.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon avvelenati del tuo avversario.",
				'pt-br': "Previne todos os danos causados a este Pokémon por ataques dos Pokémon Envenenados do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Angriffe von vergifteten Pokémon deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 50,

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
		'en-us': "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
	},

	thirdParty: {
		cardmarket: 291629,
		tcgplayer: 121189
	}
}

export default card
