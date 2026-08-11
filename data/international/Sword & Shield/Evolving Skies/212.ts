import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Sylveon VMAX",
		'fr-fr': "Nymphali VMAX",
		'es-es': "Sylveon VMAX",
		'it-it': "Sylveon VMAX",
		'pt-br': "Sylveon VMAX",
		'de-de': "Feelinara VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",
	illustrator: "Taira Akitsu",
	dexId: [700],

	evolveFrom: {
		'en-us': "Sylveon V",
		'fr-fr': "Nymphali-V",
		'es-es': "Sylveon V",
		'it-it': "Sylveon-V",
		'pt-br': "Sylveon V",
		'de-de': "Feelinara-V"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Precious Touch",
			'fr-fr': "Touche Précieuse"
		},

		effect: {
			'en-us': "Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon.",
			'fr-fr': "Attachez une carte Énergie de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez 120 dégâts de ce Pokémon-là."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Harmony",
			'fr-fr': "Harmoniomax"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc."
		},

		damage: "70+"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574270,
				tcgplayer: 246704
			}
		},
	],
}

export default card
