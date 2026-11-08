import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Everyone Explode Now",
			'fr-fr': "Explosion Générale",
			'es-es': "Que Explote Todo el Mundo",
			'it-it': "Esplosione Generale",
			'pt-br': "Todos Explodem Agora",
			'de-de': "Alle explodieren – jetzt!"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your Drifloon and Drifblim in play. This attack also does 30 damage to each of your Drifloon and Drifblim. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Baudrive et Grodrive en jeu. Cette attaque inflige aussi 30 dégâts à chacun de vos Baudrive et Grodrive. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Drifloon y Drifblim en juego. Este ataque también hace 30 puntos de daño a cada uno de tus Drifloon y Drifblim. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni per ogni tuo Drifloon e Drifblim in gioco. Questo attacco infligge anche 30 danni a ciascuno dei tuoi Drifloon e Drifblim. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Drifloon e Drifblim em jogo. Este ataque também causa 30 pontos de dano a cada um dos seus Drifloon e Drifblim. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt für jedes deiner Driftlon und Drifzepeli im Spiel 50 Schadenspunkte zu. Diese Attacke fügt auch jedem deiner Driftlon und Drifzepeli 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: "50×"
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
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785915,
				tcgplayer: 567287
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785915,
				tcgplayer: 567287
			}
		},
	],

	illustrator: "sowsow",

}

export default card
