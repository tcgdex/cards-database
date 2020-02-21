import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Aggron",
		fr: "Galeking Niv. 53",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/14/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/14/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/14/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Return Blow",
			fr: "Retour de coup",
		},
		text: {
			en: "If Aggron was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Aggron to the Defending Pokémon.",
			fr: "Si une attaque a infligé des dégâts à Galeking lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Fang",
			fr: "Croc métallique",
		},
		text: {
			en: "You may discard the top card of your deck. If you do, remove 2 damage counters and all Special Conditions from Aggron.",
			fr: "Vous pouvez défausser la carte du dessus de votre deck. Retirez alors à Galeking 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros impact",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
