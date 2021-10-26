import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks V",
		fr: "Hexadron V",
		es: "Falinks V",
		it: "Falinks V",
		pt: "Falinks V",
		de: "Legios V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Iron Defense Formation",
				fr: "Escadron Mur de Fer",
				es: "",
				it: "",
				pt: "",
				de: ""
			},
			effect: {
				en: "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "",
				it: "",
				pt: "",
				de: ""
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Gigaimpacto",
				it: "Gigaimpatto",
				pt: "Gigaimpacto",
				de: "Gigastoß"
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 160,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
