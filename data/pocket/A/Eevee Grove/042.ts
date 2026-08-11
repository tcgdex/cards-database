import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [703],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "When beset by attackers, Carbink wipes them all\nout by firing high-energy beams from the gems\nembedded in its body.",
		'fr-fr': "Ce Pokémon élimine les ennemis qui l'attaquent en projetant un laser d'énergie généré par les pierres précieuses incrustées dans son corps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hard Roll",
			'fr-fr': "Roulade Endurcie"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card