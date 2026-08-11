import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [337],
	set: Set,

	name: {
		'fr-fr': "Séléroc",
		'en-us': "Lunatone",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'pt-br': "Lunatone",
		'de-de': "Lunastein"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Nouvelle Lune",
			'en-us': "New Moon",
			'es-es': "Luna Nueva",
			'it-it': "Novilunio",
			'pt-br': "Lua Nova",
			'de-de': "Neumond"
		},

		effect: {
			'fr-fr': "Si vous avez Solaroc en jeu, évitez tous les effets infligés par n'importe quel Stade à vos Pokémon en jeu.",
			'en-us': "If you have Solrock in play, prevent all effects of any Stadium done to your Pokémon in play.",
			'es-es': "Si tienes a Solrock en juego, se evitan todos los efectos de cualquier Estadio que afecten a tus Pokémon en juego.",
			'it-it': "Se hai in gioco Solrock, previeni tutti gli effetti di qualsiasi carta Stadio inflitti ai tuoi Pokémon in gioco.",
			'pt-br': "Se você tiver Solrock em jogo, previna todos os efeitos de qualquer Estádio causados aos seus Pokémon em jogo.",
			'de-de': "Wenn du Sonnfel im Spiel hast, verhindere alle Effekte von Stadionkarten, die deinen Pokémon im Spiel zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression Lunaire",
			'en-us': "Moon Press",
			'es-es': "Presión Lunar",
			'it-it': "Pressa Lunare",
			'pt-br': "Pressão Lunar",
			'de-de': "Mondkraft"
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It was discovered at the site of a meteor strike 40 years ago. Its stare can lull its foes to sleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725172,
				tcgplayer: 509871,
				cardtrader: 255777
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725172,
				tcgplayer: 509871,
				cardtrader: 255777
			}
		},
	],

	illustrator: "Tetsu Kayama",

	
}

export default card
