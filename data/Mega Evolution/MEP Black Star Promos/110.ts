import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon ex",
		es: "Umbreon ex",
	},

	suffix: "ex",
	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [197],

	evolveFrom: {
		en: "Eevee",
		es: "Eevee",
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Lunatic Claw",
			es: "Garra Lunática",
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 140 more damage.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 140 puntos de daño más.",
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895618,
				tcgplayer: 713259
			}
		}
	],
}

export default card
