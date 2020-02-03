import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-86",
	localId: 86,

	// Card informations
	name: {
		en: "Zeraora-GX",
		fr: "Zeraora-GX",
	},

	hp: 190,

	type: [
		Type.LIGHTNING,
	],

	dexId: 807,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/86/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/86/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 194,
		name: "PLANETA Otani"
	},

	abilities: [{
		id: 1276,
		type: AbilityType.TALENT,
		name: {
			en: "Thunderclap Zone",
			fr: "Zone Vif Éclair",
		},
		text: {
			en: "Each of your Pokémon that has any Lightning Energy attached to it has no Retreat Cost.",
			fr: "Aucun de vos Pokémon auxquels de l’Énergie Lightning est attachée n’a de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Plasma Fists",
			fr: "Plasma Punch",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Full Voltage-GX",
			fr: "Pleine Tension-GX",
		},
		text: {
			en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
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
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

