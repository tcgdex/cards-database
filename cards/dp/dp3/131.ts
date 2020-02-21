import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-131",
	localId: 131,

	// Card informations
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/131/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/131/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/131/high",
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
		id: 369,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Teleportation",
			fr: "Téléportation",
		},
		text: {
			en: "Once during your turn (before your attack), choose 1 of your Active Pokémon or 1 of your Benched Pokémon and switch Gardevoir with that Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), choisissez 1 de vos Pokémon Actifs ou 1 de vos Pokémon de Banc et échangez Gardevoir avec ce Pokémon. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Bring Down",
			fr: "Réduire en poussière",
		},
		text: {
			en: "Choose 1 Pokémon (yours or your opponent's) with the fewest remaining HP (excluding Gardevoir) and that Pokémon is now Knocked Out.",
			fr: "Choisissez 1 Pokémon (le vôtre ou celui de votre adversaire) avec le moins de PV (Gardevoir exclu). Ce Pokémon est maintenant K.O.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
