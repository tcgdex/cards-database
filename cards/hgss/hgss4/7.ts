import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/7/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/7/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/7/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 840,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dimension Transfer",
			fr: "Transfert dimensionnel",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it on top of your deck. This power can't be used if Porygon-Z is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck. Ce Poké-Power ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Suspicious Beam β",
			fr: "Rayon β douteux",
		},
		text: {
			en: "If Porygon-Z has no Rainbow Energy attached to it, Porygon-Z does 20 damage to itself and Porygon-Z is now Confused.",
			fr: "Si aucune Énergie Multicolore n'est attachée à Porygon-Z, Porygon-Z s'inflige 20 dégâts et est maintenant Confus.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
