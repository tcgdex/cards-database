import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [144],
	hp: 100,
	types: ["Water"],

	description: {
		en: "It's said that this Pokémon's beautiful blue wings\nare made of ice. Articuno flies over snowy\nmountains, its long tail fluttering along behind it.",
		fr: "On raconte que ses belles plumes bleues sont\\nfaites de glace. Sa longue queue flotte au vent\\nlorsqu'il vole au-dessus des monts enneigés."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Beam",
			fr: "Laser Glace"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card