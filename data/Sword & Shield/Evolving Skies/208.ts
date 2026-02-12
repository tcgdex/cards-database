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
		en: "Glaceon VMAX",
		fr: "Givrali VMAX",
		es: "Glaceon VMAX",
		it: "Glaceon VMAX",
		pt: "Glaceon VMAX",
		de: "Glaziola VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",
	dexId: [471],

	evolveFrom: {
		en: "Glaceon V",
		fr: "Givrali-V",
		es: "Glaceon V",
		it: "Glaceon-V",
		pt: "Glaceon V",
		de: "Glaziola-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crystal Veil",
			fr: "Voile Cristal"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX, except any Glaceon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire à l'exception de celles d'un Givrali-VMAX."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Max Icicle",
			fr: "Stalactitomax"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574065,
		tcgplayer: 246755
	}
}

export default card
