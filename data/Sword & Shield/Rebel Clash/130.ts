import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				es: "Palmetazo",
				it: "Schiaffo",
				pt: "Estalo",
				de: "Klatscher"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
				es: "Giro Bola",
				it: "Vortexpalla",
				pt: "Girobola",
				de: "Gyroball"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Some believe it to be a deity that summons rain clouds. When angered, it lets out a warning cry that rings out like the tolling of a bell."
	}
}

export default card
