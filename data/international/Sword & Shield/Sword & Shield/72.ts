import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Tapu Koko V",
		fr: "Tokorico V",
		es: "Tapu Koko V",
		it: "Tapu Koko V",
		pt: "Tapu Koko V",
		de: "Kapu-Riki V"
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
				en: "Spike Draw",
				fr: "Pique-Pioche",
				es: "Robo Pico",
				it: "Battipesca",
				pt: "Comprada Espinhosa",
				de: "Stachelzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
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
				en: "Thunderous Bolt",
				fr: "Éclair du Tonnerre",
				es: "Rayo Atronador",
				it: "Fulmine Tonante",
				pt: "Raio Estrondoso",
				de: "Donnernder Einschlag"
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
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
