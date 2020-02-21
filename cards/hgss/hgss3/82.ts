import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-82",
	localId: 82,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/82/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/82/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/82/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 203,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fire Breath",
			fr: "Haleine de feu",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Burned. This power can't be used if Houndoom is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Démolosse est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 70
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

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
