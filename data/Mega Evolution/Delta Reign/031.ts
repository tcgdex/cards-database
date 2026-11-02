import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [466],
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek"
	},

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 30
	}, {
		name: {
			en: "Voltaic Hammer",
			fr: "Marteau Voltaïque"
		},

		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Discard any amount of Basic Energy from this Pokémon, and this attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies de base que vous le voulez de ce Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon."
		},

		damage: "60×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	description: {
		en: "This Pokémon presses the tips of its tails onto an opponent and instantly sends over 20,000 volts of high-voltage electricity through them.",
		fr: "S'il touche son adversaire avec l'extrémité de ses queues, il peut lui infliger instantanément une décharge de plus de 20 000 volts."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
