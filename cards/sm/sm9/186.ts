import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-186",
	localId: 186,

	// Card informations
	name: {
		en: "Gengar & Mimikyu-GX",
		fr: "Ectoplasma et Mimiqui-GX",
	},

	hp: 240,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/186/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/186/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/186/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/186/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Poltergeist",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
		},
		damage: 50
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Horror House-GX",
			fr: "Poltergeist",
		},
		text: {
			en: "Your opponent can't play any cards from their hand during their next turn. If this Pokémon has at least 1 extra Psychic Energy attached to it (in addition to this attack's cost), each player draws cards until they have 7 cards in their hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
		},
		damage: "50×"
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			fr: "Maison Terrifiante-GX",
		},
		text: {
			fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. Si au moins une Énergie Psychic supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), chaque joueur pioche jusqu’à avoir 7 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
