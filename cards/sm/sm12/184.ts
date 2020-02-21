import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-184",
	localId: 184,

	// Card informations
	name: {
		en: "Silvally-GX",
		fr: "Silvallié-GX",
	},

	hp: 210,

	type: [
		Type.COLORLESS,
	],

	dexId: 773,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/184/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/184/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/184/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/184/high",
		},
	},

	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

	abilities: [{
		id: 1363,
		type: AbilityType.TALENT,
		name: {
			en: "Disk Reload",
			fr: "Rechargement du Disque",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Buddies",
			fr: "Copains Courageux",
		},
		text: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Silver Knight-GX",
			fr: "Chevalier d’Argent-GX",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Ultra Beast, it is Knocked Out. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
