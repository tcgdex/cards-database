import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-130",
	localId: 130,

	// Card informations
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/130/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/130/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/130/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fossil Fangs",
			fr: "Crocs Fossiles",
		},
		text: {
			en: "If you don't have any Pokémon-GX or Pokémon-{EX} on your Bench, this attack does 90 more damage.",
			fr: "Si vous n’avez pas de Pokémon-GX ou de Pokémon-{EX} sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
