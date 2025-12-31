import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui"
	},

	illustrator: "Eri Yamaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This Pokémon lives in dark places untouched by\nsunlight. When it appears before humans, it hides\nitself under a cloth that resembles a Pikachu.",
		fr: "Il vit dans les lieux sombres, à l'abri du soleil. Lorsqu'il se montre, il dissimule tout son corps sous un déguisement qui rappelle Pikachu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Try to Imitate",
			fr: "Tentative d'Imitation"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card