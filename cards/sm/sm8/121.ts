import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-121",
	localId: 121,

	// Card informations
	name: {
		en: "Tyranitar-GX",
		fr: "Tyranocif-GX",
	},

	hp: 250,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/121/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/121/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/121/high.png",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1342,
		type: AbilityType.TALENT,
		name: {
			en: "Lost Out",
			fr: "Perdu à Jamais",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dusty Ruckus",
			fr: "Chahut Poussiéreux",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Benched Basic Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de base de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Lay the Smackdown-GX",
			fr: "À Plate Couture-GX",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 220
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

