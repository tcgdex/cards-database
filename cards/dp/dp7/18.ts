import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-18",
	localId: 18,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Gengar",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/18/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/18/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/18/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 336,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fainting Spell",
			fr: "Sort évanouissement",
		},
		text: {
			en: "Once during your opponent's turn, if Gengar would be Knocked Out by damage from an attack, you may flip a coin. If heads, the Defending Pokémon is Knocked Out.",
			fr: "Une seule fois lors du tour de votre adversaire, si Ectoplasma est mis K.O par des dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est face, le Pokémon  Attaquant est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Room",
			fr: "Pièce-ombre",
		},
		text: {
			en: "Put 3 damage counters on 1 of your opponent's Pokémon. If that Pokémon has any Poké-Powers, put 6 damage counters on that Pokémon instead.",
			fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si ce Pokémon possède des Poké-Powers, placez 6 marqueurs de dégât sur ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
			fr: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
			fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade dans la main de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
