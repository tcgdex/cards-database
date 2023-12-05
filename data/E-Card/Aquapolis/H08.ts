import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Entei"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Reiner Körper"
		},

		effect: {
			de: "Um eine -Energiekarte aus deiner Hand an Entei anzulegen, musst du eine an Entei angelegte Energiekarte auf deinen Ablagestapel legen. (Lege erst die -Energie an, und lege dann eine an Entei angelegte Energiekarte auf den Ablagestapel.)"
		}
	}],

	attacks: [{
		name: {
			de: "Brennende Klaue"
		},

		damage: 40,

		effect: {
			de: "Du kannst eine Münze werfen. Lege bei \"Kopf\" eine an Entei angelegte -Energiekarte auf deinen Ablagestapel, und das Verteidigende Pokémon ist jetzt verbrannt."
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}]
}

export default card
