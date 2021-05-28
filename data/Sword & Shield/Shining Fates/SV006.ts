import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic",
		en: "Rillaboom"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		fr: "Badabouin",
		en: "Thwackey"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Rythme Voltaïque",
			en: "Voltage Beat"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Grass, puis les attacher à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card