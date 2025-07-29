import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 60,

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
				en: "Wrap",
				fr: "Ligotage",
				es: "Constricción",
				it: "Avvolgibotta",
				pt: "Embrulho",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
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

	thirdParty: {
		cardmarket: 368990
	}
}

export default card
