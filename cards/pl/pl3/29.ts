import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-29",
	localId: 29,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/29/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/29/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/29/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 643,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness Restore",
			fr: "Restitution d'obscurité",
		},
		text: {
			en: "Once during your turn (before your attack), if Honchkrow is your Active Pokémon and your opponent's Bench isn't full, you may use this power. Search your opponent's discard pile for a Basic Pokémon and put it onto his or her Bench. This power can't be used if Honchkrow is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Corboss est votre Pokémon Actif et que le Banc de votre adversaire n'est pas plein, vous pouvez utiliser ce pouvoir. Choisissez dans la pile de défausse de votre adversaire un Pokémon de base et placez-le sur son Banc. Ce pouvoir ne peut pas être utilisé si Corboss est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Riot",
			fr: "Émeute",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Pokémon that isn't an Evolved Pokémon in play (both yours and your opponent's).",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon en jeu n'étant pas un Pokémon Évolué (les vôtres et ceux de votre adversaire).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
