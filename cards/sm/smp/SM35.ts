import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM35",
	localId: "SM35",

	// Card informations
	name: {
		en: "Espeon-GX",
		fr: "Mentali-GX",
	},

	hp: 200,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM35/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM35/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM35/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
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
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Divide-GX",
			fr: "Scission-GX",
		},
		text: {
			en: "Put 10 damage counters on your opponent's Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
