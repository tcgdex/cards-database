import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Gallade",
		fr: "Gallame",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/6/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/6/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/6/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Blade",
			fr: "Lame sonique",
		},
		text: {
			en: "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il soit à 50 PV d'être mis K.O. Votre adversaire échange alors le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Cut",
			fr: "Coupe Psycho",
		},
		text: {
			en: "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)",
			fr: "Vous pouvez choisir autant de cartes Récompense se trouvant face cachée que vous le voulez et les retourner. Cette attaque inflige alors 60 dégâts plus 20 dégâts supplémentaires pour chaque carte Récompense choisie. (Ces cartes restent retournées pour le reste de la partie).",
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
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
