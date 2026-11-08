import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'es-es': "Drapion",
		'it-it': "Drapion",
		'pt-br': "Drapion",
		'de-de': "Piondragi"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'it-it': "Skorupi",
		'pt-br': "Skorupi",
		'de-de': "Pionskora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hard Press",
				'fr-fr': "Pression Robuste",
				'es-es': "Dura Presión",
				'it-it': "Duropressa",
				'pt-br': "Apertão",
				'de-de': "Hochdruck"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Strike",
				'fr-fr': "Frappe Toxique",
				'es-es': "Golpe Tóxico",
				'it-it': "Attacco Tossico",
				'pt-br': "Golpe Tóxico",
				'de-de': "Giftschlag"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It's so vicious that it's called the Sand Demon. Yet when confronted by Hippowdon, Drapion keeps a low profile and will never pick a fight."
	},

	dexId: [452],

	thirdParty: {
		cardmarket: 436719,
		tcgplayer: 208433
	}
}

export default card
