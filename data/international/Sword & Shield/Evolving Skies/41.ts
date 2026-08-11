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

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crystal Veil",
			'fr-fr': "Voile Cristal",
			'es-es': "Velo de Cristal",
			'it-it': "Cristalvelo",
			'pt-br': "Crystal Veil",
			'de-de': "Kristallhülle"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX, except any Glaceon VMAX.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire à l'exception de celles d'un Givrali-VMAX.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival, excepto de los Glaceon VMAX.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario, a eccezione di qualsiasi Glaceon-VMAX.",
			'pt-br': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX, except any Glaceon VMAX.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners, außer Glaziola-VMAX, zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Max Icicle",
			'fr-fr': "Stalactitomax",
			'es-es': "Maxitémpano",
			'it-it': "Dynastalattite",
			'pt-br': "Max Icicle",
			'de-de': "Dyna-Eiszapfen"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Glaceon V",
		'fr-fr': "Givrali-V",
		'es-es': "Glaceon V",
		'it-it': "Glaceon-V",
		'pt-br': "Glaceon V",
		'de-de': "Glaziola-V"
	},

	dexId: [471],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574065,
				tcgplayer: 246753
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 740475
			}
		},
	],
}

export default card
