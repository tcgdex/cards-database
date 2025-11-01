import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon ex",
		fr: "Noctali-ex"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Chase",
			fr: "Poursuite des Ténèbres"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may switch in 1 of your opponent's Benched Pokémon that has damage on it to the Active Spot.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez envoyer un des Pokémon de Banc de votre adversaire ayant subi des dégâts sur le Poste Actif."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur"
		},

		damage: 80,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card