import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
	},

	hp: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/91/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/91/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",

	effect: {
		fr: "Jouez Fossile Nautile comme si c'était un Pokémon de base Colorless. (Fossile Nautile compte aussi comme une carte Dresseur mais si Fossile Nautile est mise K.O, elle compte comme un Pokémon K.O.) Fossile Nautile ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Nautile. (Cela ne compte pas comme un Pokémon K.O).",
	},

	abilities: [
		{
			type: AbilityType.POKEBODY,
			name: {
				fr: "Aqua réaction"
			},
			text: {
				fr: "Lorsque vous attachez une carte Énergie Eau de votre main à Fossile Nautile (effets d'attaques et Poké-Powers exclus), cherchez dans votre deck une carte qui évolue de Fossile Nautile et placez-la sur Fossile Nautile (vous le faites ainsi évoluer), Ensuite, mélangez votre deck."
			}
		}
	],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
