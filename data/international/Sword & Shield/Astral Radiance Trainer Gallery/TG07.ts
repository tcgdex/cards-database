import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	illustrator: "Kinu Nishimura",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Rapid Strike Squad",
			'fr-fr': "Brigade à Mille Poings",
			'es-es': "Escuadrón Golpe Fluido",
			'it-it': "Squadra Colpo Rapido",
			'pt-br': "Esquadrão Golpe Fluido",
			'de-de': "Fließender-Angriff-Trupp"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Rapid Strike Pokémon in play.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon Mille Poings en jeu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Golpe Fluido en juego.",
			'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon Colpo Rapido in gioco.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Golpe Fluido em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Fließender-Angriff-Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658884,
				tcgplayer: 272478
			}
		},
	],
}

export default card
