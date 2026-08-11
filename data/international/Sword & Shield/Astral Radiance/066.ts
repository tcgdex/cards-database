import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [481],
	set: Set,

	name: {
		'en-us': "Mesprit",
		'fr-fr': "Créfollet",
		'es-es': "Mesprit",
		'it-it': "Mesprit",
		'pt-br': "Mesprit",
		'de-de': "Vesprit"
	},

	illustrator: "zig",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mental Shroud",
			'fr-fr': "Écran Mental",
			'es-es': "Velo MentalBarrera Mental",
			'it-it': "Manto Psichico",
			'pt-br': "Cortina Mental",
			'de-de': "Gedankengardine"
		},

		effect: {
			'en-us': "If you have Uxie and Azelf in play, each of your Pokémon has no Weakness.",
			'fr-fr': "Si vous avez Créhelf et Créfadet en jeu, chacun de vos Pokémon n'a pas de Faiblesse.",
			'es-es': "Si tienes a Uxie y a Azelf en juego, cada uno de tus Pokémon no tiene ninguna Debilidad.",
			'it-it': "Se hai Uxie e Azelf in gioco, nessuno dei tuoi Pokémon ha debolezza.",
			'pt-br': "Caso você possua Uxie e Azelf em jogo, seus Pokémon não terão Fraqueza.",
			'de-de': "Wenn du Selfe und Tobutz im Spiel hast, hat jedes deiner Pokémon keine Schwäche."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 30
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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake's surface.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658643,
				tcgplayer: 272267
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658643,
				tcgplayer: 272267
			}
		},
	],
}

export default card
