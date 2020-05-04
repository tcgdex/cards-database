import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-215",
	localId: 215,

	// Card informations
	name: {
		en: "Rowlet & Alolan Exeggutor-GX",
		fr: "Brindibou et Noadkoko d’Alola-GX",
	},

	hp: 270,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/215/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/215/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/215/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/215/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		name: {
			en: "Super Growth",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Grass Pokémon and put it onto that Pokémon to evolve it. If that Pokémon is now a Stage 1 Pokémon, search your deck for a Stage 2 Pokémon that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Calming Hurricane",
			fr: "Super Croissance",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon Grass et placez-la sur ce dernier pour le faire évoluer. Si ce Pokémon est maintenant un Pokémon de Niveau 1, cherchez dans votre deck un Pokémon de Niveau 2 qui est l’Évolution de ce Pokémon et placez-le sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		},
		damage: 150
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Tropical Hour-GX",
			fr: "Ouragan Apaisant",
		},
		text: {
			en: "If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), your opponent shuffles all Energy from all of their Pokémon into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 200
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			fr: "Pause Tropicale-GX",
		},
		text: {
			fr: "Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange toutes les Énergies de tous ses Pokémon avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
