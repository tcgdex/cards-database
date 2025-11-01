import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar",
		fr: "Félinferno"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat"
	},

	description: {
		en: "Although it's rough mannered and egotistical, it\nfinds beating down unworthy opponents boring.\nIt gets motivated for stronger opponents.",
		fr: "Un Pokémon brutal qui n'en fait qu'à sa tête. Selon son humeur du moment, il lui arrive parfois d'ignorer sciemment les ordres de son Dresseur."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Darkest Lariat",
			fr: "Dark Lariat"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card