import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-199",
	localId: 199,

	// Card informations
	name: {
		en: "Blacephalon-GX",
		fr: "Pierroteknik-GX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 806,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/199/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/199/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/199/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/199/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Bursting Burn",
			fr: "Brûlure Explosante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Mind Blown",
			fr: "Caboche-Kaboum",
		},
		text: {
			en: "Put any amount of Fire Energy attached to your Pokémon in the Lost Zone. This attack does 50 damage for each card put in the Lost Zone in this way.",
			fr: "Placez autant d’Énergies Fire attachées à vos Pokémon que vous voulez dans la Zone Perdue. Cette attaque inflige 50 dégâts pour chaque carte placée dans la Zone Perdue de cette façon.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Burst-GX",
			fr: "Détonation-GX",
		},
		text: {
			en: "Discard 1 of your Prize cards. If it's an Energy card, attach it to 1 of your Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez une de vos cartes Récompense. Si c’est une carte Énergie, attachez-la à l’un de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
