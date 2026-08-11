import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [8],
	set: Set,

	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'es-es': "Wartortle",
		'it-it': "Wartortle",
		'pt-br': "Wartortle",
		'de-de': "Schillok"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Water Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Energía Water unida a este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 10 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665249,
				tcgplayer: 274451
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665249,
				tcgplayer: 274451
			}
		},
	],
}

export default card
