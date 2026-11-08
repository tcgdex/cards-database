import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'es-es': "Glalie",
		'it-it': "Glalie",
		'pt-br': "Glalie",
		'de-de': "Firnontor"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Fang",
				'fr-fr': "Crocs Givre",
				'es-es': "Colmillo Hielo",
				'it-it': "Gelodenti",
				'pt-br': "Presa de Gelo",
				'de-de': "Eiszahn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un’Energia assegnata a quel Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado, e descarte 1 Energia daquele Pokémon.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und du legst 1 Energie von jenem Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frosty Typhoon",
				'fr-fr': "Typhon Givré",
				'es-es': "Tifón Gélido",
				'it-it': "Gelotifone",
				'pt-br': "Tufão Glacial",
				'de-de': "Frosttaifun"
			},
			effect: {
				'en-us': "This Pokémon can’t use Frosty Typhoon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Typhon Givré pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Tifón Gélido durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
				'pt-br': "Este Pokémon não poderá usar Tufão Glacial durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Frosttaifun während deines nächsten Zuges nicht einsetzen."
			},
			damage: 120,

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
		'en-us': "It freezes its prey and chews them whole. However, it prefers to eat Pokémon like Vanillite that are already frozen.",
	},

	thirdParty: {
		cardmarket: 407889,
		tcgplayer: 201224
	}
}

export default card
