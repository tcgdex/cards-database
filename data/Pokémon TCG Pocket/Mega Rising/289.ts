import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Victreebel",
		fr: "Empiflor"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [71],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	description: {
		en: "Said to live in huge colonies deep in jungles,\nalthough no one has ever returned from there.",
		fr: "Il vit en colonie dans la jungle mais personne n'en est jamais revenu vivant."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fragrance Trap",
			fr: "Piège Parfumé"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.",
			fr: "Si ce Pokémon est sur le Poste Actif, une fois pendant votre tour, vous pouvez échanger l'un des Pokémon de base sur le Banc de votre adversaire contre son Pokémon Actif."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card