import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-14",
	localId: 14,

	// Card informations
	name: {
		en: "Lugia",
		fr: "Lugia",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/14/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/14/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Silver Wing",
			fr: "Battement argenté",
		},
		text: {
			en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Défenseur et replacez-la dans la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Destruction",
			fr: "Destruction psy",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 40 instead of 120.",
			fr: "Si le Pokémon Défenseur possède des cartes Énergie, les dégâts de base de cette attaque sont de 40 au lieu de 120.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
