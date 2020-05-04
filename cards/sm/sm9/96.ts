import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-96",
	localId: 96,

	// Card informations
	name: {
		en: "Hoopa-GX",
		fr: "Hoopa-GX",
	},

	hp: 190,

	type: [
		Type.DARKNESS,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rogue Ring",
			fr: "Anneau de Truand",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Strike",
			fr: "Frappe Ténébreuse",
		},
		text: {
			en: "This Pokémon can't use Dark Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Frappe Ténébreuse pendant votre prochain tour.",
		},
		damage: 160
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Devilish Hands-GX",
			fr: "Mains Diaboliques-GX",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon-GX or Pokémon-{EX} 6 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 30 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 GX attack in a game.)",
			fr: "Choisissez 6 fois l’un des Pokémon-GX ou des Pokémon-{EX} de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois qu’un Pokémon est choisi, infligez 30 dégâts à celui-ci. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
