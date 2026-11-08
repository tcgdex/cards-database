import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Glaceon VMAX",
		'fr-fr': "Givrali VMAX",
		'es-es': "Glaceon VMAX",
		'it-it': "Glaceon VMAX",
		'pt-br': "Glaceon VMAX",
		'de-de': "Glaziola VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",
	dexId: [471],

	evolveFrom: {
		'en-us': "Glaceon V",
		'fr-fr': "Givrali-V",
		'es-es': "Glaceon V",
		'it-it': "Glaceon-V",
		'pt-br': "Glaceon V",
		'de-de': "Glaziola-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crystal Veil",
			'fr-fr': "Voile Cristal"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX, except any Glaceon VMAX.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire à l'exception de celles d'un Givrali-VMAX."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Icicle",
			'fr-fr': "Stalactitomax"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 150
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
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574266,
				tcgplayer: 246755
			}
		},
	],
}

export default card
