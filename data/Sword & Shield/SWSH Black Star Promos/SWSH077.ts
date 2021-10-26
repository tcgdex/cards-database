import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta V",
		pt: "Zamazenta V",
		de: "Zamazenta V"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dauntless Shield",
			pt: "Dauntless Shield",
			de: "Wackerer Schild"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX.",
			pt: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			en: "Assault Tackle",
			pt: "Assault Tackle",
			de: "Überfalltackle"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			pt: "Discard a Special Energy from your opponent's Active Pokémon.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [889],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
