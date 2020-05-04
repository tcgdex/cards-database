import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-40",
	localId: 40,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/40/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/40/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/40/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 571,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Resent",
			fr: "Ressentiment",
		},
		text: {
			en: "Once during your opponent's turn, if Shedinja would be Knocked Out by damage from an attack, you may put 4 damage counters on the Attacking Pokémon and each of your opponent's Pokémon that has the same name as the Attacking Pokémon.",
			fr: "Une seule fois lors du prochain tour de votre adversaire, si Munja est mis K.O par les dégâts d'une attaque, vous pouvez placer 4 marqueurs de dégât sur le Pokémon Attaquant ainsi que sur tous les Pokémon de votre adversaire possédant le même nom que le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Curse and Deceive",
			fr: "Sort traitre",
		},
		text: {
			en: "Put 3 damage counters on the Defending Pokémon. If Shedinja has any damage counters on it, the Defending Pokémon is now Confused.",
			fr: "Placez 3 marqueurs de dégât sur le Pokémon Défenseur. Si Munja possède des marqueurs de dégât, le Pokémon Défenseur est maintenant Confus.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
