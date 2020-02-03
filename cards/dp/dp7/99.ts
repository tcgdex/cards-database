import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-99",
	localId: 99,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu LV.X",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/99/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/99/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/99/high.png",
		},
	},

	evolveFrom: {
		fr: "Raichu LV.X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 591,
		type: AbilityType.POKEBODY,
		name: {
			en: "Link Lightning",
			fr: "Éclairs en chaîne",
		},
		text: {
			en: "Once during your turn, when you put Raichu LV.X onto Raichu and use Voltage Shoot, you may use another attack of Raichu afterward. This power can't be used if Raichu is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Raichu NIV.X sur Raichu et utilisez Coup de voltage, vous pouvez ensuite utiliser une autre attaque de Raichu. Ce pouvoir ne peut pas être utilisé si Raichu est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Voltage Shoot",
			fr: "Coup de voltage",
		},
		text: {
			en: "Discard 2 Lightning Energy cards from your hand and choose 1 of your opponent's Pokémon. This attack does 80 to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 cartes Énergie Lightning de votre main et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

