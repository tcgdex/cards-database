import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-112",
	localId: 112,

	// Card informations
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 660,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/112/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/112/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/112/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/112/high.png",
		},
	},

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pickup",
			fr: "Ramassage",
		},
		text: {
			en: "Put 2 Item cards from your discard pile into your hand.",
			fr: "Ajoutez 2 cartes Objet de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dig",
			fr: "Tunnel",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

