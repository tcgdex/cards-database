import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Victreebel",
		fr: "Empiflor"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

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
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
		fr: "On dit qu'il vit en colonie dans la jungle, mais personne n'en est jamais revenu vivant pour le confirmer."
	}
}

export default card
