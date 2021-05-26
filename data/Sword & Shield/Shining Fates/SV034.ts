import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Beldeneige"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		fr: "Frissonille"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse de Glace"
		},

		effect: {
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water de Banc."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde Boréale"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card