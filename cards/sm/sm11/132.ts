import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-132",
	localId: 132,

	// Card informations
	name: {
		en: "Weavile-GX",
		fr: "Dimoret-GX",
	},

	hp: 200,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/132/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/132/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/132/high.png",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},

	abilities: [{
		id: 1397,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Connection",
			fr: "Connexion Ténébreuse",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a basic Darkness Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nocturnal Maneuvers-GX",
			fr: "Manœuvres Nocturnes-GX",
		},
		text: {
			en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez autant de Pokémon de base que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

