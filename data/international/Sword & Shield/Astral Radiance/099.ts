import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'en-us': "Darkrai VSTAR",
		'fr-fr': "Darkrai VSTAR",
		'es-es': "Darkrai V-ASTRO",
		'it-it': "Darkrai V ASTRO",
		'pt-br': "Darkrai V-ASTRO",
		'de-de': "Darkrai VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Darkrai V",
		'fr-fr': "Darkrai-V",
		'es-es': "Darkrai V",
		'it-it': "Darkrai-V",
		'pt-br': "Darkrai V",
		'de-de': "Darkrai-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dark Pulse",
			'fr-fr': "Vibrobscur",
			'es-es': "Pulso Umbrío",
			'it-it': "Neropulsar",
			'pt-br': "Pulso Sombrio",
			'de-de': "Finsteraura"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Darkness Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Darkness ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Darkness-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658751,
				tcgplayer: 272300
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 675936
			}
		},
	],
}

export default card
