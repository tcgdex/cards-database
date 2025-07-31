import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Ultra Necrozma ex",
		es: "Ultra-Necrozma ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Photon Claw",
			es: "Garra Fotónica"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	},
	{
		name: {
			en: "Shoegaze",
			es: "Shoegaze"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Metal", "Metal"],

		effect: {
			en: "Discard the top 5 cards of each player's deck.",
			es: "Descarta las 5 primeras cartas de la baraja de cada jugador."
		}
	}],

	retreat: 2,
	boosters: ["vol9"],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}]
}

export default card