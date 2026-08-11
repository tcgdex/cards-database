import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Playful Kick",
			'fr-fr': "Coup de Pied de Garnement",
			'es-es': "Patada Juguetona",
			'it-it': "Calcio Briccone",
			'pt-br': "Chute Brincalhão",
			'de-de': "Verspielter Kick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its tail moves with greater dexterity than its hands. Making deft use of this tail, Aipom lives high among the treetops.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769311,
				tcgplayer: 550181
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769311,
				tcgplayer: 550181
			}
		},
	],

	illustrator: "Mugi Hamada",

}

export default card