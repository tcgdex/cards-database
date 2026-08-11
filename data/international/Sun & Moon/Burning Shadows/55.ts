import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
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
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Boost",
				'fr-fr': "Boost de Poison",
				'es-es': "Impulso Veneno",
				'it-it': "Velenocarica",
				'pt-br': "Impulso de Veneno",
				'de-de': "Giftverstärker"
			},
			effect: {
				'en-us': "If this Pokémon is Poisoned, this attack does 80 more damage. Then, remove that Special Condition from this Pokémon.",
				'fr-fr': "Si ce Pokémon est Empoisonné, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez cet État Spécial de ce Pokémon.",
				'es-es': "Si este Pokémon está Envenenado, este ataque hace 80 puntos de daño más. Después, elimina esa Condición Especial de este Pokémon.",
				'it-it': "Se questo Pokémon è avvelenato, questo attacco infligge 80 danni in più. Poi, rimuovi tale condizione speciale da questo Pokémon.",
				'pt-br': "Se este Pokémon estiver Envenenado, este ataque causará 80 pontos de dano a mais. Em seguida, remova aquela Condição Especial deste Pokémon.",
				'de-de': "Wenn dieses Pokémon vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Jener Spezielle Zustand auf diesem Pokémon verliert anschließend seine Wirkung."
			},
			damage: "80+",

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
		'en-us': "It has a poison sac at its throat. When it croaks, the stored poison is churned for greater potency.",
	},

	thirdParty: {
		cardmarket: 299459,
		tcgplayer: 138537
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
