import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [449],
	set: Set,

	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		en: "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658686,
				tcgplayer: 272280
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658686,
				tcgplayer: 272280
			}
		},
	],
}

export default card
