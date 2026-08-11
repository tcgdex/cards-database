import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'es-es': "Dewgong",
		'it-it': "Dewgong",
		'pt-br': "Dewgong",
		'de-de': "Jugong"
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
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Freezing Breath",
				'fr-fr': "Souffle Glacial",
				'es-es': "Aliento Congelante",
				'it-it': "Alito Congelante",
				'pt-br': "Hálito Congelante",
				'de-de': "Eisatem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato. Se esce croce, il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente ficará Adormecido.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert. Bei \"Zahl\" schläft das Aktive Pokémon deines Gegners jetzt."
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
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio da Aurora",
				'de-de': "Aurorastrahl"
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

	description: {
		'en-us': "Its streamlined body has little drag in water. The colder the temperature, the friskier it gets.",
	},

	thirdParty: {
		cardmarket: 289842,
		tcgplayer: 117778
	}
}

export default card
