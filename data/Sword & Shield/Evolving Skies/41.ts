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

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	abilities: [{
		type: "Ability",

		name: {
			en: "Crystal Veil",
			fr: "Voile Cristal",
			es: "Velo de Cristal",
			it: "Cristalvelo",
			pt: "Crystal Veil",
			de: "Kristallhülle"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX, except any Glaceon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire à l’exception de celles d’un Givrali-VMAX.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival, excepto de los Glaceon VMAX.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario, a eccezione di qualsiasi Glaceon-VMAX.",
			pt: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX, except any Glaceon VMAX.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners, außer Glaziola-VMAX, zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			en: "Max Icicle",
			fr: "Stalactitomax",
			es: "Maxitémpano",
			it: "Dynastalattite",
			pt: "Max Icicle",
			de: "Dyna-Eiszapfen"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack also does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card