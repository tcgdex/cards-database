import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		'fr-fr': "Cizayox",
		'en-us': "Scizor",
		'es-es': "Scizor",
		'it-it': "Scizor",
		'pt-br': "Scizor",
		'de-de': "Scherox"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Insécateur",
		'en-us': "Scyther",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Cisailles Punitives",
			'en-us': "Punishing Scissors",
			'es-es': "Tijeras Castigadoras",
			'it-it': "Forbici Punitive",
			'pt-br': "Tesouras da Punição",
			'de-de': "Strafende Scheren"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			'en-us': "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tem uma Habilidade.",
			'de-de': "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'fr-fr': "Coupe",
			'en-us': "Cut",
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

	description: {
		'en-us': "This Pokémon's pincers, which contain steel, can crush any hard object they get ahold of into bits.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725285,
				tcgplayer: 509952,
				cardtrader: 255647
			}
		},
	],

	illustrator: "Oku",

	
}

export default card
