import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		'es-mx': "Pikachu",
		de: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
			es: "Bofetón Cola",
			'es-mx': "Cachetazo de Cola",
			de: "Schweifschlag",
			it: "Codasberla",
			pt: "Ataque de Cauda"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule",
			es: "Relampaguito",
			'es-mx': "Minirrayo",
			de: "Mini-Blitz",
			it: "Minifulmine",
			pt: "Corisquinho"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869666,
			tcgplayer: 675867
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869666,
			tcgplayer: 675867
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870225,
			tcgplayer: 676897
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870226,
			tcgplayer: 677037
		}
	},
],
}

export default card
