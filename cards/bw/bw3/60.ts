import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/60/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/60/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/60/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 449,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Shadow",
			fr: "Ombre Maudite",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez placer 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Eerie Glow",
			fr: "Lueur Sinistre",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
