import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [448],

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	attacks: [
		{
			cost: [
				"Metal",
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
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre 1 carta.",
				de: "Ziehe 1 Karte."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Knuckle Impact",
				fr: "Coup d'Articulations",
				es: "Impacto Nudillo",
				it: "Impatto Nocche",
				pt: "Impacto Ossudo",
				de: "Knöchelprall"
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 160,

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

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey."
	},

	thirdParty: {
		cardmarket: 512310,
		tcgplayer: 226574
	}
}

export default card
