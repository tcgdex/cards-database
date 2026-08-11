import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'es-mx': "Alcremie",
		'de-de': "Pokusan",
		'it-it': "Alcremie",
		'pt-br': "Alcremie"
	},

	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'es-mx': "Milcery",
		'de-de': "Hokumil",
		'it-it': "Milcery",
		'pt-br': "Milcery",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [869],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Sweet Circle",
			'fr-fr': "Cercle Sucré",
			'es-es': "Círculo Dulce",
			'es-mx': "Dulce Círculo",
			'de-de': "Süße Runde",
			'it-it': "Dolce Cerchio",
			'pt-br': "Ciranda Açucarada"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Pokémon in play.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in gioco.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Desserts that Alcremie have decorated with their cream have a rich, sweet flavor and bring happiness to all who eat them.",
	},

	illustrator: "Narumi Sato",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857619,
				tcgplayer: 660384,
				cardtrader: 356827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857619,
				tcgplayer: 660384,
				cardtrader: 356827
			}
		},
	],
}

export default card
