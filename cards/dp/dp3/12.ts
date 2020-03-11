import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/12/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/12/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/12/high",
		},
	},

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tongue Reel",
			fr: "Langue enroulante",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. If you choose a Benched Pokémon, switch the Defending Pokémon with that Pokémon. This attack does 20 damage to the Pokémon you chose. Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Si vous choisissez un Pokémon de Banc, échangez le Pokémon Défenseur avec ce Pokémon. Cette attaque inflige 20 dégâts au Pokémon choisi. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boundless Power",
			fr: "Puissance illimitée",
		},
		text: {
			en: "During your next turn, Lickilicky can't attack.",
			fr: "Lors de votre prochain tour, Coudlangue ne peut pas attaquer.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
