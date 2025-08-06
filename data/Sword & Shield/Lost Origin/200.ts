import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion VSTAR",
		fr: "Drascore VSTAR",
		es: "Drapion V-ASTRO",
		it: "Drapion V ASTRO",
		pt: "Drapion V-ASTRO",
		de: "Piondragi VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		en: "Drapion V",
		fr: "Drascore-V",
		es: "Drapion V",
		it: "Drapion-V",
		pt: "Drapion V",
		de: "Piondragi-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Big Bang Arm",
			fr: "Bras Big Bang",
			es: "Brazo Big Bang",
			it: "Braccio Big Bang",
			pt: "Braço Big Bang",
			de: "Urknall-Arm"
		},

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "250-"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674132,
		tcgplayer: 284155
	}
}

export default card