import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mean Look",
				fr: "Regard noir"
			},
			effect: {
				en: "The Defending Pokémon can't retreat as long as Murkrow remains your Active Pokémon. (Benching or evolving either Pokémon ends this effect.)",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite aussi longtemps que Cornèbre est votre Pokémon Actif. (Envoyer l'un ou l'autre des Pokémon sur le Banc ou le faire évoluer met fin à cet effet.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet sur le Pokémon Défenseur."
			}

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "On prétend que lorsqu'il est poursuivi, il attire son attaquant sur de sombres pistes de montagne où le traqueur se perd."
	}
}

export default card
