import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/110/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/110/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/110/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
		fr: "Fleurisson",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 1074,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Afterburner",
			fr: "Combustion",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. This power can't be used if Typhlosion is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Fire et l’attacher à l’un de vos Pokémon. Dans ce cas, ajoutez un marqueur de dégâts sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Destroy",
			fr: "Éclatodestruction",
		},
		text: {
			en: "Discard an Energy card attached to Typhlosion and discard an Energy card attached to the Defending Pokémon.",
			fr: "Défaussez-vous d’une carte Énergie attachée à Typhlosion et d’une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
