import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Powerful Storm",
			'fr-fr': "Tempête Puissante",
			'es-es': "Tormenta Recia",
			'it-it': "Tempestona",
			'pt-br': "Tempestade Poderosa",
			'de-de': "Mächtiger Sturm"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Energia ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte zu."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 100
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
	regulationMark: "F",


	description: {
		'en-us': "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691775,
				tcgplayer: 478172
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691775,
				tcgplayer: 478172
			}
		},
	],
}

export default card
