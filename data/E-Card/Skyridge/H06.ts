import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Jugong"
	},

	attacks: [{
		name: {
			de: "Frostsperre"
		},

		damage: 20,

		effect: {
			de: "Wirf eine Münze. Bei 'Kopf' kann dein Gegner während seines nächsten Zuges keine Energie-Karten aus seiner Hand an sein aktives Pokémon anlegen."
		},

		cost: ["Water", "Colorless"]
	}, {
		name: {
			de: "Erdrückendes Eis"
		},

		damage: "40+",

		effect: {
			de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede -Energie in den Rückzugskosten des verteidigenden Pokémon zu. Beim Ermitteln des Schadens werden erst etwaige Effekte auf die Rückzugskosten angewandt und dann die Rückzugskosten des verteidigenden Pokémon verwendet."
		},

		cost: ["Water", "Water", "Colorless", "Colorless"]
	}]
}

export default card