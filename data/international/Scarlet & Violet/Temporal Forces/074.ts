import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cosmic Beatdown",
			'fr-fr': "Dérouillée Cosmique",
			'es-es': "Porrazo Cósmico",
			'it-it': "Cosmobatosta",
			'pt-br': "Abater Cósmico",
			'de-de': "Kosmischer Niederprügler"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Pokémon in play.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760704,
				tcgplayer: 542818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760704,
				tcgplayer: 542818
			}
		},
	],

	illustrator: "Shinya Komatsu",

}

export default card