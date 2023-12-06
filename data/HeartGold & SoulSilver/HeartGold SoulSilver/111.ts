import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ho-Oh LEGEND",
		fr: "Ho-Oh LÉGENDAIRE",
		de: "Ho-Oh LEGENDE"
	},

	illustrator: "Shinji Higuchi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 140,

	types: [
		"Fire",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	description: {
		en: "Legends claim this Pokémon flies the world’s skies continuously on its magnificent, seven-colored wings."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	abilities: [{
		name: {
			de: "Heiliger Regenbogen"
		},

		effect: {
			de: "Alle Energien, die an Ho-Oh-LEGENDE angelegt sind, liefern -Energie anstelle ihres normalen Typs."
		}
	}],

	attacks: [{
		name: {
			de: "Strahlenschwinge"
		},

		damage: 100,

		effect: {
			de: "Lege 1 an Ho-Oh-LEGENDE angelegte Energie auf deinen Ablagestapel."
		},

		cost: ["Fire", "Fire", "Fire", "Fire"]
	}]
}

export default card
