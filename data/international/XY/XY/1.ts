import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Venusaur EX",
		'fr-fr': "Florizarre EX",
		'es-es': "Venusaur EX",
		'it-it': "Venusaur EX",
		'pt-br': "Venusaur EX",
		'de-de': "Bisaflor EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Powder",
				'fr-fr': "Poudre Toxik",
				'es-es': "Polvo Veneno",
				'it-it': "Velenpolvere",
				'pt-br': "Pó Venenoso",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jungle Hammer",
				'fr-fr': "Marteau Végétal",
				'es-es': "Martillo Selva",
				'it-it': "Martelgiungla",
				'pt-br': "Martelo da Selva",
				'de-de': "Dschungel-Hammer"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281338,
		tcgplayer: 90324
	}
}

export default card
