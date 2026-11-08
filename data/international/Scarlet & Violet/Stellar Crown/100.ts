import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [600],
	set: Set,

	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Iron Tackle",
			'fr-fr': "Charge de Fer",
			'es-es': "Bloqueo de Hierro",
			'it-it': "Azione Ferrea",
			'pt-br': "Golpe de Colisão Férreo",
			'de-de': "Eisentackle"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 60
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
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785954,
				tcgplayer: 567326
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785954,
				tcgplayer: 567326
			}
		},
	],

	illustrator: "Mina Nakai",

}

export default card
