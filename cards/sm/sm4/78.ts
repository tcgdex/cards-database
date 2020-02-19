import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-78",
	localId: 78,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/78/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/78/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},

	abilities: [{
		id: 1102,
		type: AbilityType.TALENT,
		name: {
			en: "Moomoo Malt",
			fr: "Milk-Shake Meumeu",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, heal 90 damage from that Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, soignez 90 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sitdown Splash",
			fr: "Grosse Éclaboussure",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

