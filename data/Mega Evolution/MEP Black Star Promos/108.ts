import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon ex",
		fr: "Mentali-ex",
		es: "Espeon ex",
	},

	suffix: "ex",
	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [196],


	cameoDexIds: [37, 38, 115, 133, 151, 183, 184, 337, 357, 420, 421, 494, 764],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Solar Beatdown",
			fr: "Dérouillée Solaire",
			es: "Insolación",
		},

		effect: {
			en: "This attack does 30 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en juego.",
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895616,
				tcgplayer: 713258
			}
		}
	],
}

export default card
