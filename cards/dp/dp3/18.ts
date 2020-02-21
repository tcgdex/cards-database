import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Drattak",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/18/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/18/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/18/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Direct Hit",
			fr: "Coup direct",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dragon Finish",
			fr: "Finition de dragon",
		},
		text: {
			en: "Discard 2 basic Fire Energy cards or 2 basic Water Energy cards attached to Salamence. If you discarded 2 basic Fire Energy cards, this attack does 100 damage to the Defending Pokémon. If you discarded 2 basic Water Energy cards, this attack does 100 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (If you can't discard cards, this attack does nothing.)",
			fr: "Défaussez 2 cartes Énergie de base Fire ou 2 cartes Énergie de base Water  attachées à Drattak. Si vous avez défaussé 2 cartes Énergie de base Fire, cette attaque inflige 100 dégâts au Pokémon Défenseur. Si vous avez défaussé 2 cartes Énergie de base Water, cette attaque inflige 100 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.) (Si vous ne pouvez pas défausser de cartes, cette attaque est sans effet.)",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
