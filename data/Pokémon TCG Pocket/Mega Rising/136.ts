import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk",
		fr: "Golemastoc"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [623],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem"
	},

	description: {
		en: "There's a theory that inside Golurk is a perpetual\nmotion machine that produces limitless energy,\nbut this belief hasn't been proven."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heavy Rocket",
			fr: "Missile Lourd"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Reveal the top 3 cards of your deck. This attack does 60 damage for each Pokémon with a Retreat Cost of 3 or more you find there. Shuffle the revealed cards back into your deck.",
			fr: "Montrez les 3 premières cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque Pokémon avec un Coût de Retraite de 3 ou plus que vous y trouvez. Mélangez les cartes montrées avec votre deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card