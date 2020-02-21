import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-56",
	localId: 56,

	// Card informations
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/56/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/56/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/56/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 1343,
		type: AbilityType.TALENT,
		name: {
			en: "Queen's Call",
			fr: "Appel de la Souveraine",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Pokémon that isn't a Pokémon-GX or Pokémon-{EX}, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon qui n’est pas un Pokémon-GX ou un Pokémon-{EX}, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Lariat",
			fr: "Lasso Puissant",
		},
		text: {
			en: "This attack does 50 more damage for each Evolution Pokémon on your Bench.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
