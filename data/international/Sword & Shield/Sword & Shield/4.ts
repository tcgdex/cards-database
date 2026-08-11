import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Paralyze Poison",
				'fr-fr': "Poison Paralysant",
				'es-es': "Veneno Paralizante",
				'it-it': "Veleno Paralizzante",
				'pt-br': "Veneno Paralisante",
				'de-de': "Lähmendes Gift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent's Active Pokémon is also Paralyzed.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est également Paralysé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar también Paralizado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Lancia una moneta. Se esce testa, viene anche paralizzato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente também ficará Paralisado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners auch paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Méga-Sangsue",
				'es-es': "Megaagotar",
				'it-it': "Megassorbimento",
				'pt-br': "Megadreno",
				'de-de': "Megasauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "After captivating opponents with its sweet scent, it lashes them with its thorny whips."
	},

	thirdParty: {
		cardmarket: 436199,
		tcgplayer: 208270
	}
}

export default card
