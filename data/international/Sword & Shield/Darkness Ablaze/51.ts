import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [747],

	name: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Regeneration",
				'fr-fr': "Rétablissement",
				'es-es': "Reanimación",
				'it-it': "Rigenerazione",
				'pt-br': "Regeneração",
				'de-de': "Regeneration"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Poison Tentacles",
				'fr-fr': "Tentacules Empoisonnés",
				'es-es': "Tentáculos Venenosos",
				'it-it': "Tentacoli Velenosi",
				'pt-br': "Tentáculos Venenosos",
				'de-de': "Giftige Tentakel"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The first symptom of its sting is numbness. The next is an itching sensation so intense that it's impossible to resist the urge to claw at your skin."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483129,
				tcgplayer: 219377
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483129,
				tcgplayer: 219377
			}
		},
	],
}

export default card
