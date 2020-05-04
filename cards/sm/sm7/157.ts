import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-157",
	localId: 157,

	// Card informations
	name: {
		en: "Banette-GX",
		fr: "Branette-GX",
	},

	hp: 190,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/157/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/157/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/157/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 74,
		type: AbilityType.TALENT,
		name: {
			en: "Shady Move",
			fr: "Déplacement Louche",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may move 1 damage counter from 1 Pokémon to another Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez déplacer un marqueur de dégâts d’un Pokémon vers un autre Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Chant",
			fr: "Chant d’Ombre",
		},
		text: {
			en: "This attack does 10 more damage for each Supporter card in your discard pile. You can't add more than 100 damage in this way.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Tomb Hunt-GX",
			fr: "Chasse Sépulcre-GX",
		},
		text: {
			en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
