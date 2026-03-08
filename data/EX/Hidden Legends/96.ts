import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ninetales ex",
		fr: "Feunard ex",
		de: "Vulnona ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Intense Glare",
				fr: "Regard intense",
				de: "Intense Glare"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Brûlé et Confus.",
				de: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				de: "Fire Blast"
			},
			effect: {
				en: "Discard a Fire Energy attached to Ninetales ex.",
				fr: "Défaussez une Énergie  attachée à Feunard ex.",
				de: "Discard a  Energy card attached to Ninetales ex."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276170,
		tcgplayer: 87782
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
