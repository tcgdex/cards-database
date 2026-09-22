import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It raises its offspring in its belly pouch. It lets its baby out to play only when it feels safe to do so."
	},

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama",
		es: "Kangaskhan",
		it: "Kangaskhan",
		'es-mx': "Kangaskhan"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rage",
			fr: "Frénésie",
			de: "Raserei",
			es: "Furia",
			it: "Ira",
			'es-mx': "Furia"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			de: "Megahieb",
			es: "Megapuño",
			it: "Megapugno",
			'es-mx': "Megapuño"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907721,
				tcgplayer: 716506
			}
		}
	],
}

export default card
