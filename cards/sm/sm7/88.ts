import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-88",
	localId: 88,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/88/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/88/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 944,
		type: AbilityType.TALENT,
		name: {
			en: "Excavate",
			fr: "Déterrer",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top card of your deck. You may discard that card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus de votre deck. Vous pouvez défausser cette carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Disable",
			fr: "Entrave",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

