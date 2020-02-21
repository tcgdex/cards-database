import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-172",
	localId: 172,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/172/high",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1071,
		type: AbilityType.TALENT,
		name: {
			en: "Unaware",
			fr: "Inconscient",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
			fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
