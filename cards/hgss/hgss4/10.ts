import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-10",
	localId: 10,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/10/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/10/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 910,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Spooky Whirlpool",
			fr: "Tourbillon d’esprits",
		},
		text: {
			en: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may use this power. Your opponent shuffles his or her hand into his or her deck and draws 6 cards.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Spiritomb de votre main sur votre Banc, vous pouvez utiliser ce Poké-Power. Votre adversaire mélange sa main avec son deck, puis pioche 6 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Color Tag",
			fr: "Panel de couleurs",
		},
		text: {
			en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Colorless type. Put 1 damage counter on each Pokémon your opponent has in play of the type you chose.",
			fr: "Choisissez le type GrassFireWaterLightningPsychicFightingDarknessMetal ou Colorless. Placez un marqueur de dégât sur chacun des Pokémon que votre adversaire a en jeu et qui correspond au type choisi.",
		},
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

