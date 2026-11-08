import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strafe",
				'fr-fr': "Bombarder",
				'es-es': "Pasada de Ataque",
				'it-it': "Mitragliare",
				'pt-br': "Bombardear",
				'de-de': "Beharken"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
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
				'fr-fr': "Attachez une carte Énergie Darkness de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Darkness de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Darkness da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Darkness-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 90,

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
		'en-us': "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
	},

	thirdParty: {
		cardmarket: 302192,
		tcgplayer: 146717
	}
}

export default card
