import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-80",
	localId: 80,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",

	abilities: [{
		id: 1355,
		type: AbilityType.TALENT,
		name: {
			en: "Wonder Lock",
			fr: "Serrure Merveille",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. Prevent any damage done to the Pokémon this card is attached to by attacks from your opponent's Mega Evolution Pokémon. If this card is attached to a Pokémon, discard this card at the end of your opponent's turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon en tant que carte Outil Pokémon. Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques des Pokémon Méga-Évolution de votre adversaire. Si cette carte est attachée à un Pokémon, défaussez-la à la fin du tour de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
