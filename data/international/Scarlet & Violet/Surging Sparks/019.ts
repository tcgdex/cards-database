import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [250],
	set: Set,

	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'es-es': "Ho-Oh",
		'it-it': "Ho-Oh",
		'pt-br': "Ho-Oh",
		'de-de': "Ho-Oh"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Shining Blaze",
			'fr-fr': "Brasier Brillant",
			'es-es': "Llamarada Radiante",
			'it-it': "Fiammata Luminosa",
			'pt-br': "Incêndio Brilhante",
			'de-de': "Glühender Glanz"
		},

		effect: {
			'en-us': "If you have any Tera Pokémon on your Bench, this attack does 100 more damage.",
			'fr-fr': "Si vous avez au moins un Pokémon Téracristal sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si tienes algún Pokémon Teracristal en tu Banca, este ataque hace 100 puntos de daño más.",
			'it-it': "Se hai dei Pokémon Teracristal in panchina, questo attacco infligge 100 danni in più.",
			'pt-br': "Se você tiver algum Pokémon Tera no seu Banco, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn du mindestens 1 Terakristall-Pokémon auf deiner Bank hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794274,
				tcgplayer: 589964
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794274,
				tcgplayer: 589964
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "kodama",
	
}

export default card
