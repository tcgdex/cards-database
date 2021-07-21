import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
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
				en: "Strafe",
				fr: "Bombarder",
				es: "Pasada de Ataque",
				it: "Mitragliare",
				pt: "Bombardear",
				de: "Beharken"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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
				en: "Oblivion Wing",
				fr: "Mort-Ailes",
				es: "Ala Mortífera",
				it: "Ali del Fato",
				pt: "Asa do Esquecimento",
				de: "Unheilsschwingen"
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Darkness de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Darkness da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Darkness-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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



}

export default card
