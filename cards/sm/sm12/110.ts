import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-110",
	localId: 110,

	// Card informations
	name: {
		en: "Flygon-GX",
		fr: "Libégon-GX",
	},

	hp: 240,

	type: [
		Type.FIGHTING,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/110/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1379,
		type: AbilityType.TALENT,
		name: {
			en: "Dusty Defense",
			fr: "Défense Poussiéreuse",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Desert Hurricane",
			fr: "Ouragan du Désert",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 120 more damage. Then, discard that Stadium card.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
		},
		damage: 120
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Sonic Edge-GX",
			fr: "Tranchant Sonique-GX",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 220
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
