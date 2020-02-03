import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-54",
	localId: 54,

	// Card informations
	name: {
		en: "Raichu & Alolan Raichu-GX",
		fr: "Raichu et Raichu d’Alola-GX",
	},

	hp: 260,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/54/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/54/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tandem Shock",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 80 more damage, and your opponent's Active Pokémon is now Paralyzed.",
		},
		damage: 80
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Ride-GX",
			fr: "Choc en Tandem",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If this Pokémon has at least 2 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 150
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Tour d’Éclair-GX",
		},
		text: {
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Si au moins 2 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: "150+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

