import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		it: "Dewgong",
		pt: "Dewgong",
		de: "Jugong"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Freezing Breath",
				fr: "Souffle Glacial",
				es: "Aliento Congelante",
				it: "Alito Congelante",
				pt: "Hálito Congelante",
				de: "Eisatem"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato. Se esce croce, il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente ficará Adormecido.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert. Bei \"Zahl\" schläft das Aktive Pokémon deines Gegners jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio da Aurora",
				de: "Aurorastrahl"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289842
	}
}

export default card
