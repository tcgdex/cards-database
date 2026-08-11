import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Incineroar",
		'fr-fr': "Félinferno"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [727],
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Torracat"
	},

	description: {
		'en-us': "Although it's rough mannered and egotistical, it\nfinds beating down unworthy opponents boring.\nIt gets motivated for stronger opponents.",
		'fr-fr': "Un Pokémon brutal qui n'en fait qu'à sa tête. Selon son humeur du moment, il lui arrive parfois d'ignorer sciemment les ordres de son Dresseur."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Darkest Lariat",
			'fr-fr': "Dark Lariat"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card