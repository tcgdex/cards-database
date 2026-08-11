import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Oblivion Wing",
				'fr-fr': "Mort-Ailes",
				'es-es': "Ala Mortífera",
				'it-it': "Ali del Fato",
				'pt-br': "Asa do Esquecimento",
				'de-de': "Unheilsschwingen"
			},
			effect: {
				'en-us': "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Darkness de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia Darkness da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Darkness-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Blade",
				'fr-fr': "Lame Obscure",
				'es-es': "Cuchillada Oscuridad",
				'it-it': "Oscurolama",
				'pt-br': "Lâmina Sombria",
				'de-de': "Finsterklinge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
	},

	thirdParty: {
		cardmarket: 291480,
		tcgplayer: 121194
	}
}

export default card
