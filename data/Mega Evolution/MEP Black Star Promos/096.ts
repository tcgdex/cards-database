import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		es: "Moltres",
	},

	illustrator: "Krgc",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",
	dexId: [146],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fiery Flapping",
			es: "Aleteo Abrasador",
		},

		effect: {
			en: "Once during your turn, if you have Articuno and Zapdos in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to this Pokémon.",
			es: "Una vez durante tu turno, si tienes a Articuno y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía {R} Básica de tu mano a este Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Spin",
			es: "Giro Fuego",
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			es: "Descarta 2 energías de este Pokémon.",
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895606,
				tcgplayer: 713264
			}
		}
	],
}

export default card
