import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-39",
	localId: 39,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libégon",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/39/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/39/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/39/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1196,
		type: AbilityType.TALENT,
		name: {
			en: "Dragon Guard",
			fr: "Garde des Dragons",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to your Dragon Pokémon. (Existing effects are not removed.)",
			fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à vos Pokémon Dragon. (Les effets déjà en action ne sont pas retirés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

