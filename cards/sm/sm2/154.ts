import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-154",
	localId: 154,

	// Card informations
	name: {
		en: "Toxapex-GX",
		fr: "Prédastérie-GX",
	},

	hp: 210,

	type: [
		Type.PSYCHIC,
	],

	dexId: 748,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/154/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/154/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/154/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/154/high.png",
		},
	},

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Spike Cannon",
			fr: "Picanon",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Super Intense Poison",
			fr: "Poison Super Intense",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 10 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 10 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Total Shelter-GX",
			fr: "Refuge Complet-GX",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

