import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-13",
	localId: 13,

	// Card informations
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/13/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Solar Transporter",
			fr: "Transporteur Solaire",
		},
		text: {
			en: "Reveal the top 5 cards of your deck and put all Team Plasma cards you find there into your hand. Discard the other cards.",
			fr: "Montrez les 5 cartes du dessus de votre deck et ajoutez toutes les cartes de la Team Plasma que vous y trouvez à votre main. Défaussez les autres cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Leech Life",
			fr: "Vampirisme",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
