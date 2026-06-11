import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886462,
				tcgplayer: 693529
			}
		},
	],

	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		'es-mx': "Patrat",
		de: "Nagelotz",
		it: "Patrat",
		pt: "Patrat"
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
			en: "Watchful Eye",
			fr: "Œil Attentif",
			es: "Ojo Avizor",
			'es-mx': "Ojo Avizor",
			de: "Wachsames Auge",
			it: "Occhio Vigile",
			pt: "Olhar Atento"
		},

		effect: {
			en: "Damage counters on each Pokémon (both yours and your opponent's) can't be moved to other Pokémon.",
			fr: "Les marqueurs de dégâts sur chacun des Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être déplacés vers d'autres Pokémon.",
			es: "Los contadores de daño de cada Pokémon (tanto tuyos como de tu rival) no se pueden mover a otro Pokémon.",
			'es-mx': "Los contadores de daño en cada Pokémon (tanto tuyos como de tu rival) no se pueden mover a otros Pokémon.",
			de: "Schadensmarken auf jedem Pokémon (deinen und denen deines Gegners) können nicht auf andere Pokémon verschoben werden.",
			it: "I segnalini danno presenti su ciascun Pokémon, sia tuo che del tuo avversario, non possono essere spostati su altri Pokémon.",
			pt: "Os contadores de dano em cada Pokémon (seus e do seu oponente) não podem ser movidos para outros Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
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
}

export default card