import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		684,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lick Away",
				fr: "Lèche-Lèche",
				es: "Lametazo",
				it: "Leccavia",
				pt: "Lamber para Longe",
				de: "Wegschlecken"
			},
			effect: {
				en: "Remove all Special Conditions from this Pokémon.",
				fr: "Retirez tous les États Spéciaux de ce Pokémon.",
				es: "Elimina todas las Condiciones Especiales de este Pokémon.",
				it: "Rimuovi tutte le condizioni speciali da questo Pokémon.",
				pt: "Remova todas as Condições Especiais deste Pokémon.",
				de: "Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 20,

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
