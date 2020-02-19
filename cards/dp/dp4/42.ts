import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-42",
	localId: 42,

	// Card informations
	name: {
		en: "Huntail",
		fr: "Serpang",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 367,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/42/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/42/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/42/high.png",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Scary Face",
			fr: "Grimace",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Threaten and Drop",
			fr: "Menacer et lâcher",
		},
		text: {
			en: "If Huntail has any Darkness Energy attached to it, this attack does 30 damage plus 20 more damage and discard a Special Energy card, if any, attached to the Defending Pokémon.",
			fr: "Si Serpang possède de l'Énergie Darkness, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

