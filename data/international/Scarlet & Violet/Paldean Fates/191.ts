import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'es-es': "Scizor",
		'it-it': "Scizor",
		'pt-br': "Scizor",
		'de-de': "Scherox"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Punishing Scissors",
			'fr-fr': "Cisailles Punitives",
			'es-es': "Tijeras Castigadoras",
			'it-it': "Forbici Punitive",
			'pt-br': "Tesouras da Punição",
			'de-de': "Strafende Scheren"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tem uma Habilidade.",
			'de-de': "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751730,
				tcgplayer: 535149,
				cardtrader: 274376
			}
		},
	],

	illustrator: "GOSSAN",

	description: {
		'en-us': "This Pokémon's pincers, which contain steel, can crush any hard object they get ahold of into bits.",
	},

}

export default card
