import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tight Jaw",
				fr: "Mâchoire Serrée",
				es: "Mandíbula Cerrada",
				it: "Strettazanna",
				pt: "Mandíbula Firme",
				de: "Fester Biss"
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
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It stores poison in an internal poison sac and secretes that poison through its skin. If you touch this Pokémon, a tingling sensation follows."
	}
}

export default card
