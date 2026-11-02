import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [722],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It sends its feathers, which are as sharp\nas blades, flying in attack. Its legs are strong,\nso its kicks are also formidable.",
		fr: "Il attaque en tirant des plumes acérées. La force de ses coups de patte est également redoutable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card