import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-45",
	localId: 45,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/45/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/45/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/45/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Duflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 578,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Reaction",
			fr: "Réaction Énergie",
		},
		text: {
			en: "Once during your turn (before your attack), when you attach a Grass or Psychic Energy card from your hand to Vileplume (excluding effects of attacks or Poké-Powers), you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Asleep. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Grass ou Psychic de votre main à Rafflesia (les effets d'attaques ou des Poké-Powers exclus), vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Endormi. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Rafflesia est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Disturbing Pollen",
			fr: "Pollen dérangeant",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors du prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
