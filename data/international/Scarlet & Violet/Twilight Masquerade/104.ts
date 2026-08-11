import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'de-de': "Knöchelhieb"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Superpower",
			'fr-fr': "Surpuissance",
			'es-es': "Fuerza Bruta",
			'it-it': "Troppoforte",
			'pt-br': "Superpoder",
			'de-de': "Kraftkoloss"
		},

		effect: {
			'en-us': "You may do 30 more damage. If you do, this Pokémon also does 30 damage to itself.",
			'fr-fr': "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Você pode causar 30 pontos de dano a mais. Se fizer isto, este Pokémon também causará 30 pontos de dano a si mesmo.",
			'de-de': "Du kannst 30 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon auch sich selbst 30 Schadenspunkte zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769278,
				tcgplayer: 550148
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769278,
				tcgplayer: 550148
			}
		},
	],

	illustrator: "Aya Kusube",

}

export default card