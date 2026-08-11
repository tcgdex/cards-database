import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
	},


	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'es-mx': "Patrat",
		'de-de': "Nagelotz",
		'it-it': "Patrat",
		'pt-br': "Patrat"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [504],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Watchful Eye",
			'fr-fr': "Œil Attentif",
			'es-es': "Ojo Avizor",
			'es-mx': "Ojo Avizor",
			'de-de': "Wachsames Auge",
			'it-it': "Occhio Vigile",
			'pt-br': "Olhar Atento"
		},

		effect: {
			'en-us': "Damage counters on each Pokémon (both yours and your opponent's) can't be moved to other Pokémon.",
			'fr-fr': "Les marqueurs de dégâts sur chacun des Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être déplacés vers d'autres Pokémon.",
			'es-es': "Los contadores de daño de cada Pokémon (tanto tuyos como de tu rival) no se pueden mover a otro Pokémon.",
			'es-mx': "Los contadores de daño en cada Pokémon (tanto tuyos como de tu rival) no se pueden mover a otros Pokémon.",
			'de-de': "Schadensmarken auf jedem Pokémon (deinen und denen deines Gegners) können nicht auf andere Pokémon verschoben werden.",
			'it-it': "I segnalini danno presenti su ciascun Pokémon, sia tuo che del tuo avversario, non possono essere spostati su altri Pokémon.",
			'pt-br': "Os contadores de dano em cada Pokémon (seus e do seu oponente) não podem ser movidos para outros Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886462,
				tcgplayer: 693529
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886462,
				tcgplayer: 693529
			}
		},
	],
}

export default card
