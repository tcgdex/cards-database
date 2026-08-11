import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [24],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Ekans"
	},

	description: {
		'en-us': "The latest research has determined that there\nare over 20 possible arrangements of the\npatterns on its stomach.",
		'fr-fr': "Une étude récente aurait recensé plus de vingt motifs différents pouvant orner le devant du capuchon des Arbok."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card