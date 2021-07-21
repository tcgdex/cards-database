import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		670,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Swirling Petals",
				fr: "Pétales Tourbillonnants",
				es: "Remolino de Pétalos",
				it: "Turbine di Petali",
				pt: "Turbilhão de Pétalas",
				de: "Flatterblüten"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. If you do, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Si lo haces, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Se lo fai, scambia questo Pokémon con uno dei tuoi Pokémon in panchina.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Se fizer isto, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Wenn du das machst, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
