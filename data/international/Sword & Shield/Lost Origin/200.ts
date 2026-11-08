import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [452],
	set: Set,

	name: {
		'en-us': "Drapion VSTAR",
		'fr-fr': "Drascore VSTAR",
		'es-es': "Drapion V-ASTRO",
		'it-it': "Drapion V ASTRO",
		'pt-br': "Drapion V-ASTRO",
		'de-de': "Piondragi VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Drapion V",
		'fr-fr': "Drascore-V",
		'es-es': "Drapion V",
		'it-it': "Drapion-V",
		'pt-br': "Drapion V",
		'de-de': "Piondragi-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Big Bang Arm",
			'fr-fr': "Bras Big Bang",
			'es-es': "Brazo Big Bang",
			'it-it': "Braccio Big Bang",
			'pt-br': "Braço Big Bang",
			'de-de': "Urknall-Arm"
		},

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "250-"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 674206,
				tcgplayer: 284155
			}
		},
	],
}

export default card