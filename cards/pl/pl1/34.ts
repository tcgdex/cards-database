import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/34/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/34/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/34/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 271,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cheerful Voice",
			fr: "Voix joyeuse",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. During your next turn, each of Ludicolo's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance). This power can't be used if Ludicolo is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Votre tour est alors terminé. Lors de votre prochain tour, chacune des attaques de Ludicolo inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance). Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mad Dance",
			fr: "Danse de fou",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Best Dance",
			fr: "Meilleure danse",
		},
		text: {
			en: "After doing damage, remove from Ludicolo the number of damage counters equal to the damage you did to the Defending Pokémon. Ludicolo can't use Best Dance during your next turn.",
			fr: "Après avoir infligé des dégâts, retirez à Ludicolo autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Ludicolo ne peut pas utiliser Meilleure danse lors de votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
