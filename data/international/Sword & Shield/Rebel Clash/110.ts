import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Falinks V",
		'fr-fr': "Hexadron V",
		'es-es': "Falinks V",
		'it-it': "Falinks V",
		'pt-br': "Falinks V",
		'de-de': "Legios V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [870],
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Iron Defense Formation",
				'fr-fr': "Escadron Mur de Fer",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
			},
			effect: {
				'en-us': "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				'fr-fr': "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
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
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Gigaimpacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456493,
				tcgplayer: 213201
			}
		},
	],
}

export default card
