import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slap",
				fr: "Gifle",
				es: "Bofetón",
				it: "Sberla",
				pt: "Tapa",
				de: "Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Konfusion"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	thirdParty: {
		cardmarket: 281703
	}
}

export default card
