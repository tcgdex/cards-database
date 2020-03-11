import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Electrode",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/26/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/26/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/26/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 864,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Shift",
			fr: "Déplacement d'Énergie",
		},
		text: {
			en: "Once during your turn, if Electrode would be Knocked Out by damage from an attack, you may use this power. Electrode isn't discarded. Instead, attach it as an Energy card to 1 of your Pokémon. While attached, this card is a Special Energy card and provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.)",
			fr: "Si Electrode est mis K.O par des dégâts infligés par une attaque, vous pouvez utiliser ce pouvoir. Electrode n'est pas défaussé. Attachez-le alors comme une carte Énergie à 1 de vos Pokémon. Lorsqu'elle est attachée, cette carte est une carte Énergie spéciale et fournit tous les types d'Énergie mais seulement 1 à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.)",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Ion Blast",
			fr: "Explosion d'ions",
		},
		text: {
			en: "You may do 40 damage plus 60 more damage. If you do, Electrode does 100 damage to itself.",
			fr: "Vous pouvez infliger 40 dégâts plus 60 dégâts supplémentaires. Electrode s'inflige alors 100 dégâts.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
