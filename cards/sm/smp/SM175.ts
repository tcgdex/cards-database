import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM175",
	localId: "SM175",

	// Card informations
	name: {
		en: "Eevee-GX",
		fr: "Évoli-GX",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM175/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM175/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM175/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM175/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",

	abilities: [{
		id: 1327,
		type: AbilityType.TALENT,
		name: {
			en: "Ascension DNA",
			fr: "ADN d’Ascension",
		},
		text: {
			en: "Once during your turn (before your attack), if you have a Pokémon in your hand that evolves from Eevee, you may put that card onto this Pokémon to evolve it. Before evolving, heal all damage from this Pokémon. You can't use this Ability during your first turn or the turn this Pokémon was put into play.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez dans votre main un Pokémon qui évolue d’Évoli, vous pouvez placer cette carte sur ce Pokémon pour le faire évoluer. Avant de le faire évoluer, soignez tous les dégâts de ce Pokémon. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boost Dash",
			fr: "Ruée Propulsée",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Joy Maker GX",
			fr: "Créateur de Joie-GX",
		},
		text: {
			en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
