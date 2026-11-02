import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,
	cameoDexIds: [25, 133, 183, 184, 349, 674],


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
	illustrator: "kirisAki",
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
			fr: "Voile Cristal",
			de: "Kristallhülle"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX, except any Glaceon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire à l'exception de celles d'un Givrali-VMAX.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners, außer Glaziola-VMAX, zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Max Icicle",
			fr: "Stalactitomax",
			de: "Dyna-Eiszapfen"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
			thirdParty: {
				cardmarket: 574267,
				tcgplayer: 246756
			}
		},
	],
}

export default card
