import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-106",
	localId: 106,

	// Card informations
	name: {
		en: "Gallade 4",
		fr: "Gallame  Niv. X",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/106/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/106/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 478,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Blade Storm",
			fr: "Tempête de lames",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Gallade LV.X from your hand onto your Active Gallade , you may put 1 damage counter on each of your opponent's Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Gallame  LV.X de votre main sur votre Gallame  Actif, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aimed Cut",
			fr: "Coupure ciblée",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
