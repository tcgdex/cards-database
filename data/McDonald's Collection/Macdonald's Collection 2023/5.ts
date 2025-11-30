import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [975],

	hp: 160,

	types: ["Water"],

	stage: "Stage1",

	evolveFrom: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				en: "Frost Smash",
				fr: "Coup de Givre",
				es: "Golpe Gélido",
				it: "Geloschiacciata",
				pt: "Pancada Gélida",
				de: "Frosthieb"
			},
			damage: 80,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				en: "Wild Tackle",
				fr: "Charge Sauvage",
				es: "Placaje Salvaje",
				it: "Azione Selvaggia",
				pt: "Investida Selvagem",
				de: "Wildtackle"
			},
			damage: 170,
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

