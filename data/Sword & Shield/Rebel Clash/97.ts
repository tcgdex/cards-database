import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite",
		de: "Meditie"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yoga Shock",
				fr: "Yoga Choc",
				es: "Impacto Yoga",
				it: "Shock Yoga",
				pt: "Choque de Ioga",
				de: "Yogaschock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It eats just one berry a day. By enduring hunger, its spirit is tempered and made sharper."
	}
}

export default card
