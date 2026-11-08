import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'it-it': "Regice",
		'pt-br': "Regice",
		'de-de': "Regice"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Icy Barrier",
				'fr-fr': "Barrière Glaciale",
				'es-es': "Barrera Hielo",
				'it-it': "Criobarriera",
				'pt-br': "Barreira Gélida",
				'de-de': "Eisige Barriere"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Stadium cards from their hand.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Stadio che ha in mano.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da própria mão.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Stadionkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
				'es-es': "Viento Hielo",
				'it-it': "Ventogelato",
				'pt-br': "Vento Congelante",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

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
		'en-us': "Its body is made of ice from the ice age. It controls frigid air of -328 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 361292,
		tcgplayer: 170862
	}
}

export default card
