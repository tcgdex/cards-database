import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Wave",
				fr: "Vague Survoltée",
				es: "Onda Electrificante",
				it: "Onda Volt",
				pt: "Onda de Volts",
				de: "Voltwelle"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355557
	}
}

export default card
