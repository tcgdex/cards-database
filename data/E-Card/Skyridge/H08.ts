import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Forstellka"
	},

	attacks: [{
		name: {
			de: "Rundumschlag"
		},

		damage: "20x",

		effect: {
			de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Zeigen beide Münzen \"Kopf\", tausche Forstellka mit 1 der Pokémon auf deiner Bank aus."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			de: "Streubombe"
		},

		damage: 40,

		effect: {
			de: "Wirf 2 Münzen. Füge für jeden geworfenen \"Kopf\" jedem Pokémon auf der generischen Bank 10 Schadenspunkte zu. Füge für jede geworfene \"Zahl\" jedem Pokémon auf deiner eigenen Bank 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
		},

		cost: ["Metal", "Colorless", "Colorless"]
	}]
}

export default card