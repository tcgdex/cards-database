import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-172",
	localId: 172,

	// Card informations
	name: {
		en: "Lunala-GX",
		fr: "Lunala-GX",
	},

	hp: 250,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/172/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1218,
		type: AbilityType.TALENT,
		name: {
			en: "Psychic Transfer",
			fr: "Transfert Psy",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Psychic Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic de l’un de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Moongeist Beam",
			fr: "Rayon Spectral",
		},
		text: {
			en: "The Defending Pokémon can't be healed during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Lunar Fall-GX",
			fr: "Chute Lunaire-GX",
		},
		text: {
			en: "Knock Out 1 of your opponent's Basic Pokémon that isn't a Pokémon-GX. (You can't use more than 1 GX attack in a game.)",
			fr: "Mettez K.O. l’un des Pokémon de base de votre adversaire qui n’est pas un Pokémon-GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
