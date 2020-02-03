import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-189",
	localId: 189,

	// Card informations
	name: {
		en: "Cobalion-GX",
		fr: "Cobaltium-GX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 638,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/189/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/189/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/189/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/189/high.png",
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

	abilities: [{
		id: 1324,
		type: AbilityType.TALENT,
		name: {
			en: "Metal Symbol",
			fr: "Symbole Métal",
		},
		text: {
			en: "Each of your Pokémon that has any Metal Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
			fr: "Aucun de vos Pokémon auquel de l’Énergie Metal est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Dueling Saber",
			fr: "Sabre Duel",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 60 more damage.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Rule-GX",
			fr: "Volonté de Fer-GX",
		},
		text: {
			en: "During your opponent's next turn, their Pokémon can't attack. (This includes Pokémon that come into play on that turn.) (You can't use more than 1 GX attack in a game.)",
			fr: "Pendant le prochain tour de votre adversaire, ses Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

