import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
	},

	illustrator: "Taira Akitsu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	dexId: [144],

	abilities: [{
		type: "Ability",

		name: {
			en: "Frosty Flapping",
			es: "Aleteo Helador",
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Zapdos in play, you may use this Ability. Attach a Basic {W} Energy card from your hand to this Pokémon.",
			es: "Una vez durante tu turno, si tienes a Moltres y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía {W} Básica de tu mano a este Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hail",
			es: "Granizo",
		},

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895607,
				tcgplayer: 713265
			}
		}
	],
}

export default card
