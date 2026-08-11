import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Tapu Koko V",
		'fr-fr': "Tokorico V",
		'es-es': "Tapu Koko V",
		'it-it': "Tapu Koko V",
		'pt-br': "Tapu Koko V",
		'de-de': "Kapu-Riki V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [785],
	set: Set,
	hp: 200,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Spike Draw",
				'fr-fr': "Pique-Pioche",
				'es-es': "Robo Pico",
				'it-it': "Battipesca",
				'pt-br': "Comprada Espinhosa",
				'de-de': "Stachelzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderous Bolt",
				'fr-fr': "Éclair du Tonnerre",
				'es-es': "Rayo Atronador",
				'it-it': "Fulmine Tonante",
				'pt-br': "Raio Estrondoso",
				'de-de': "Donnernder Einschlag"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 427186,
		tcgplayer: 206050
	}
}

export default card
