import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
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
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison Paralysant",
				es: "Veneno Paralizante",
				it: "Veleno Paralizzante",
				pt: "Veneno Paralisante",
				de: "Lähmendes Gift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent’s Active Pokémon is also Paralyzed.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est également Paralysé.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar también Paralizado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Lancia una moneta. Se esce testa, viene anche paralizzato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente também ficará Paralisado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners auch paralysiert."
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
				en: "Mega Drain",
				fr: "Méga-Sangsue",
				es: "Megaagotar",
				it: "Megassorbimento",
				pt: "Megadreno",
				de: "Megasauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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
		en: "After captivating opponents with its sweet scent, it lashes them with its thorny whips."
	}
}

export default card
