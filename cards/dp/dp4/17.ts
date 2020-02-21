import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-17",
	localId: 17,

	// Card informations
	name: {
		en: "Exploud",
		fr: "Brouhabam",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 295,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/17/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/17/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/17/high",
		},
	},

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambient Noise",
			fr: "Bruit d'ambiance",
		},
		text: {
			en: "Flip 2 coins. If the first coin is heads, this attack does 50 damage to the Defending Pokémon. If the first coin is tails, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If the second coin is heads, the Defending Pokémon is now Confused. If the second coin is tails, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn.",
			fr: "Lancez 2 pièces. Si la première pièce est face, cette attaque inflige 50 dégâts au Pokémon Défenseur. Si la première pièce est pile, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc). Si la seconde pièce est face, le Pokémon Défenseur est maintenant Confus. Si la seconde pièce est pile, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Voice",
			fr: "Megaphone",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
