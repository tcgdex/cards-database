import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [437],

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
				'es-es': "Palmetazo",
				'it-it': "Schiaffo",
				'pt-br': "Estalo",
				'de-de': "Klatscher"
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
				'en-us': "Gyro Ball",
				'fr-fr': "Gyroballe",
				'es-es': "Giro Bola",
				'it-it': "Vortexpalla",
				'pt-br': "Girobola",
				'de-de': "Gyroball"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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


	stage: "Stage1",

	description: {
		'en-us': "Some believe it to be a deity that summons rain clouds. When angered, it lets out a warning cry that rings out like the tolling of a bell."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458048,
				tcgplayer: 213226
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458048,
				tcgplayer: 213226
			}
		},
	],
}

export default card
