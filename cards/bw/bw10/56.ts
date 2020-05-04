import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-56",
	localId: 56,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Démolosse",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/56/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/56/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/56/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blazing Claws",
			fr: "Griffes Ardentes",
		},
		text: {
			en: "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 60 more damage, and the Defending Pokémon is now Burned.",
			fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
