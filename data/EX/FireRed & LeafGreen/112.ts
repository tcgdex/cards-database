import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venusaur ex",
		fr: "Florizarre ex",
		de: "Bisaflor ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
				fr: "Transfert d'Énergie",
				de: "Energy Trans"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Venusaur ex is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie  d'1 de vos Pokémon à 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Florizarre ex est affecté par un État Spécial.",
				de: "As often as you like during your turn (before yxour attack), mova a  Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Venusaur ex is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pollen Hazard",
				fr: "Pollen dangereux",
				de: "Pollen Hazard"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned, Burned, and Confused.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné, Brûlé et Confus.",
				de: "The Defending Pokémon is now Poisoned, Burned, and Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-soleil",
				de: "Solarbeam"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276288,
		tcgplayer: 90323
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
