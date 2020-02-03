import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/32/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/32/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/32/high.png",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 849,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Good Night Melody",
			fr: "Mélodie endormante",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Each Active Pokémon (both yours and your opponent's) is now Asleep. This power can't be used if Wigglytuff is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Grodoudou est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Balloon Attack",
			fr: "Attaque de ballon",
		},
		text: {
			en: "If Igglybuff is anywhere under Wigglytuff, this attack does 40 damage plus 20 more damage.",
			fr: "Si Toudoudou se trouve sous Grodoudou, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

