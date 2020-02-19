import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW75",
	localId: "BW75",

	// Card informations
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW75/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW75/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW75/high.png",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1138,
		type: AbilityType.TALENT,
		name: {
			en: "Plasma Search",
			fr: "Recherche Plasma",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it into your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte de la Team Plasma dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser une capacité spéciale du même nom pendant votre tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card

