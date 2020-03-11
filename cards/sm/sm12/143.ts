import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-143",
	localId: 143,

	// Card informations
	name: {
		en: "Togepi & Cleffa & Igglybuff-GX",
		fr: "Togepi, Mélo et Toudoudou-GX",
	},

	hp: 240,

	type: [
		Type.FAIRY,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/143/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/143/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Panic",
			fr: "Pagaille Roulante",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: "120+"
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Supreme Puff-GX",
			fr: "Chou-prême-GX",
		},
		text: {
			en: "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) Si au moins 14 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange tous ses Pokémon de Banc et les cartes qui leur sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		}
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
