import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Sylveon VMAX",
		fr: "Nymphali VMAX",
		es: "Sylveon VMAX",
		it: "Sylveon VMAX",
		pt: "Sylveon VMAX",
		de: "Feelinara VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",
	illustrator: "Taira Akitsu",
	dexId: [700],

	evolveFrom: {
		en: "Sylveon V",
		fr: "Nymphali-V",
		es: "Sylveon V",
		it: "Sylveon-V",
		pt: "Sylveon V",
		de: "Feelinara-V"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Precious Touch",
			fr: "Touche Précieuse"
		},

		effect: {
			en: "Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon.",
			fr: "Attachez une carte Énergie de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez 120 dégâts de ce Pokémon-là."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Harmony",
			fr: "Harmoniomax"
		},

		effect: {
			en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc."
		},

		damage: "70+"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574123,
		tcgplayer: 246704
	}
}

export default card
