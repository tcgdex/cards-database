import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-14",
	localId: 14,

	// Card informations
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/14/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/14/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 1043,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Speed Gain",
			fr: "Accélération",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin until you get tails. For each heads, search your discard pile for a basic Fire Energy card or a basic Lightning Energy card and attach it to Rayquaza. This power can't be used if Rayquaza is affected by a Special Condition or if you have another Rayquaza in play.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, cherchez dans votre pile de défausse une carte Énergie de base Fire ou une carte Énergie de base Lightning et attachez-la à Rayquaza. Ce pouvoir ne peut pas être utilisé si Rayquaza est affecté par un État Spécial ou si vous possédez un autre Rayquaza en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Sky Judgment",
			fr: "Jugement céleste",
		},
		text: {
			en: "Discard all Energy attached to Rayquaza.",
			fr: "Défaussez toute l'Énergie attachée à Rayquaza.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
