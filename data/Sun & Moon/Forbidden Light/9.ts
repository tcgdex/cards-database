import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
		es: "Skiddo",
		it: "Skiddo",
		pt: "Skiddo",
		de: "Mähikel"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		672,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Growth",
				fr: "Croissance",
				es: "Desarrollo",
				it: "Crescita",
				pt: "Crescimento",
				de: "Wachstum"
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to this Pokémon.",
				fr: "Attachez une carte Énergie Grass de votre main à ce Pokémon.",
				es: "Une 1 carta de Energía Grass de tu mano a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Grass dalla tua mano.",
				pt: "Ligue 1 carta de Energia Grass da sua mão a este Pokémon.",
				de: "Lege1 Grass-Energiekarte aus deiner Hand an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
