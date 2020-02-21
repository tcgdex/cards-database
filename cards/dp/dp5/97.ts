import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-97",
	localId: 97,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/97/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/97/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/97/high",
		},
	},

	evolveFrom: {
		fr: "Level-Up",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 501,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Garchomp LV.X from your hand onto your Active Garchomp, you may flip 3 coins. For each heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok LV.X  de votre main sur votre Carchacrok Actif, vous pouvez lancer 3 pièces. Pour chaque face, placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		name: {
			en: "Restore",
			fr: "Restituer",
		},
		text: {
			en: "Search your discard pile for a Pokémon (excluding Pokémon LV.X) and put it onto your Bench as a Basic Pokémon. Then, you may search your discard pile for up to 3 basic Energy cards and attach them to that Pokémon.",
			fr: "Choisissez un Pokémon dans votre pile de défausse (Pokémon LV.X exclus) et placez-le sur votre Banc comme un Pokémon de base. Ensuite, vous pouvez choisir dans votre pile de défausse jusqu'à 3 cartes Énergie de base et les attacher à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
