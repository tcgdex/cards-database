import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'es-mx': "Wigglytuff",
		'de-de': "Knuddeluff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff"
	},

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'es-mx': "Jigglypuff",
		'de-de': "Pummeluff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [40],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Round",
			'fr-fr': "Chant Canon",
			'es-es': "Canon",
			'es-mx': "Canon",
			'de-de': "Kanon",
			'it-it': "Coro",
			'pt-br': "Circular"
		},

		effect: {
			'en-us': "This attack does 40 damage for each of your Pokémon in play that has the Round attack.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tengan el ataque Canon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tengan el ataque Canon.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon in gioco che ha l'attacco Coro.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular."
		},

		damage: "40×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'es-mx': "Sísmico",
			'de-de': "Geowurf",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
	},

	illustrator: "Naoyo Kimura",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857652,
				tcgplayer: 662239,
				cardtrader: 356863
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857652,
				tcgplayer: 662239,
				cardtrader: 356863
			}
		},
	],	
}

export default card
