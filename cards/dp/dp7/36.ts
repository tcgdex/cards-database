import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-36",
	localId: 36,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Electrode",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/36/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/36/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/36/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 576,
		type: AbilityType.POKEBODY,
		name: {
			en: "Radiance",
			fr: "Rayonnement",
		},
		text: {
			en: "If Electrode is your Active Pokémon and is damaged by an opponent's attack (even if Electrode is Knocked Out), put 1 damage counter on each of your opponent's Pokémon.",
			fr: "Si Electrode est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Electrode est mis K.O), placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Low Current",
			fr: "Bas courant",
		},
		text: {
			en: "If Electrode was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
			fr: "Si une attaque a infligé des dégâts à Electrode lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
