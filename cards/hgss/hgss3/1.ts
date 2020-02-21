import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-1",
	localId: 1,

	// Card informations
	name: {
		en: "Bellossom",
		fr: "Joliflor",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/1/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/1/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/1/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1038,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hustle Step",
			fr: "Foulée rapide",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Joliflor est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dance 'til Dawn",
			fr: "Danse nocturne",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. Bellossom is now Asleep.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Joliflor est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
