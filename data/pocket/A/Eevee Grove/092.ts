import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee ex",
		'fr-fr': "Évoli-ex"
	},

	illustrator: "kurumitsu",
	rarity: "Three Star",
	category: "Pokemon",

	dexId: [133],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Veevee 'volve",
			'fr-fr': "Volivolution"
		},

		effect: {
			'en-us': "This Pokémon can evolve into any Pokémon that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
			'fr-fr': "Ce Pokémon peut évoluer en n'importe quel  si vous le jouez de votre main sur ce Pokémon. (Ce Pokémon ne peut pas évoluer pendant votre premier tour ou pendant le tour où vous le jouez.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card