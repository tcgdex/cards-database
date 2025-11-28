import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Type: Null",
		fr: "Type:0"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [772],
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "A Pokémon weapon developed for a specific\nmission, it went berserk during an experiment,\nso it was cryogenically frozen.",
		fr: "Développé en tant qu'arme dans un but bien précis, il est devenu incontrôlable lors d'une expérience et a dû être cryogénisé."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Blow",
			fr: "Coup d'Poing Éclair"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card