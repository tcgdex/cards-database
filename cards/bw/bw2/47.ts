import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-47",
	localId: 47,

	// Card informations
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/47/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/47/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/47/high",
		},
	},

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 550,
		type: AbilityType.TALENT,
		name: {
			en: "Magic Room",
			fr: "Zone Magique",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Madkinesis",
			fr: "Mentalisme",
		},
		text: {
			en: "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
