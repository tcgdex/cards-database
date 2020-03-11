import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Aggron",
		fr: "Galeking",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/1/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/1/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/1/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
			fr: "Deuxième coup",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
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
			en: "Guard Claw",
			fr: "Griffe de garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Galeking par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
