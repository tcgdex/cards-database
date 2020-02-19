import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-96",
	localId: 96,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Dusknoir LV.X",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/96/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/96/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/96/high.png",
		},
	},

	evolveFrom: {
		fr: "Noctunoir LV.X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 586,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Ectoplasm",
			fr: "Ectoplasme",
		},
		text: {
			en: "If Dusknoir is your Active Pokémon and would be Knocked Out by damage from your opponent's attack, you may discard all cards attached to Dusknoir LV.X and put Dusknoir LV.X as a Stadium card into play instead of discarding it. This counts as Dusknoir being Knocked Out and your opponent takes a Prize card. As long as you have Dusknoir LV.X as a Stadium card in play, put 1 damage counter on each of your opponent's Pokémon between turns. If another Stadium card comes into play or Dusknoir LV.X is discarded by the effect of any attacks, Poké-Powers, Poké-Bodies, Trainer, or Supporter cards, return Dusknoir LV.X to your hand.",
			fr: "Si Noctunoir est votre Pokémon Actif et que les dégâts d'une attaque de votre adversaire le mettent K.O, vous pouvez défausser toutes les cartes attachées à Noctunoir NIV.X et placer Noctunoir NIV.X comme carte Stade en jeu au lieu de la défausser. Noctunoir est mis K.O et votre adversaire récolte une carte Récompense. Tant que Noctunoir NIV.X  comme carte Stade est en jeu, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire entre deux tours. Si une autre carte Stade entre en jeu ou si Noctunoir NIV.X est défaussé par l'effet d'attaques, Poké-Powers, Poké-Bodies, cartes Dresseur ou Supporter, reprenez Noctunoir NIV.X dans votre main.",
		}
	}],



	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

