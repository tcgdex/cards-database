import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali"
	},

	illustrator: "chibi",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [134],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's.",
		fr: "Il vit au bord de l'eau. Sa queue semblable à celle d'un poisson lui donne l'apparence d'une sirène."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hyper Whirlpool",
			fr: "Hyper Tourbillon"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card