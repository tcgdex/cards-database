import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Celebi VMAX",
		fr: "Celebi VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		en: "Celebi V",
		fr: "Celebi-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Curative Forest",
			fr: "Forêt Curative"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Grass Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon Grass."
		}
	}],

	attacks: [{
		name: {
			en: "Max Plant",
			fr: "Végétomax"
		},

		effect: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		},

		damage: 130,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card