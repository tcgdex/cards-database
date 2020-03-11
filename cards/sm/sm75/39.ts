import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm75/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/39/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shigenori Negishi",

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
