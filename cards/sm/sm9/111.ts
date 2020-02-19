import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-111",
	localId: 111,

	// Card informations
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/111/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/111/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/111/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},

	abilities: [{
		id: 1130,
		type: AbilityType.TALENT,
		name: {
			en: "Luminous Barrier",
			fr: "Barrière Lumineuse",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-GX or Pokémon-{EX}.",
			fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-{EX} de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

