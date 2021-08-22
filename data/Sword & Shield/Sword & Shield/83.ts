import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fade Out",
				fr: "Faiblir",
				es: "Difuminar",
				it: "Dissolvenza",
				pt: "Desaparecer",
				de: "Ausblenden"
			},
			effect: {
				en: "Put this Pokémon and all attached cards into your hand.",
				fr: "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
				es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
				it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
				de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison."
	}
}

export default card
