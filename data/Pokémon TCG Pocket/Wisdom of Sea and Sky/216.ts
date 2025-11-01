import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 130,
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
			en: "Bubble Drain",
			fr: "Vide Bulle"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card