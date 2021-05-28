import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Polthégeist",
		en: "Polteageist"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Théffroi",
		en: "Sinistea"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Heure du Thé",
			en: "Tea Break"
		},

		effect: {
			fr: "Vous devez défausser un Pokémon qui a l’attaque Folle Aventure de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			en: "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		name: {
			fr: "Folle Aventure",
			en: "Mad Party"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card