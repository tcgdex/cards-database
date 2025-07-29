import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Me First",
				fr: "Moi d'Abord",
				es: "Yo Primero",
				it: "Precedenza",
				pt: "Primeiro Eu",
				de: "Egotrip"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre um card.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fire",
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
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282681
	}
}

export default card
