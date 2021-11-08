import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple VMAX",
		fr: "Pomdrapi VMAX",
		es: "Flapple VMAX",
		it: "Flapple VMAX",
		pt: "Flapple VMAX",
		de: "Drapfel VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	evolveFrom: {
		en: "Flapple V",
		fr: "Pomdrapi-V",
		es: "Flapple V",
		it: "Flapple-V",
		pt: "Flapple V",
		de: "Drapfel-V"
	},

	attacks: [{
		name: {
			en: "G-Max Rolling",
			fr: "Roulade G-Max",
			es: "Gigarrodar",
			it: "Gigarotola",
			pt: "Rolamento G-Max",
			de: "Giga-Rollen"
		},

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "250-",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card