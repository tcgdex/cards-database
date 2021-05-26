import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Single Strike Roar",
			fr: "Rugissement Poing Final"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Poing Final, puis l’attacher à l’un de vos Pokémon Poing Final. Mélangez ensuite votre deck. Si vous avez attaché de l’Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card