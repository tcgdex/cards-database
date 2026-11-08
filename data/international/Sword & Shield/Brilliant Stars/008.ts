import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [389],
	set: Set,

	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'es-es': "Torterra",
		'it-it': "Torterra",
		'pt-br': "Torterra",
		'de-de': "Chelterrar"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'es-es': "Grotle",
		'it-it': "Grotle",
		'pt-br': "Grotle",
		'de-de': "Chelcarain"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Evopress",
			'fr-fr': "Évopress",
			'es-es': "Evopresión",
			'it-it': "Evopressa",
			'pt-br': "Evocompressão",
			'de-de': "Evodruck"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your Evolution Pokémon in play.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Évolutifs en jeu.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon Evolución en juego.",
			'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon Evoluzione in gioco.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon de Evolução em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Entwicklungs-Pokémon im Spiel 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608432,
				tcgplayer: 263597
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608432,
				tcgplayer: 263597
			}
		},
	],
}

export default card
