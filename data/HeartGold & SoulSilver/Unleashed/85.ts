import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocean",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Spray Splash",
				fr: "Embruns",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 1 damage counter on 1 of your opponent’s Pokémon. This power can’t be used if Kingdra is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégât sur l’un des Pokémon de votre adversaire. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État Spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Steam",
				fr: "Dragovapeur",
			},
			effect: {
				en: "If your opponent has any Fire Pokémon in play, this attack’s base damage is 20 instead of 60.",
				fr: "Si votre adversaire dispose de n’importe quel Pokémon Fire en jeu, cette attaque inflige 20 dégâts de base au lieu de 60.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
