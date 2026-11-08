import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'fr-fr': "Mysdibule",
		'en-us': "Mawile",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'pt-br': "Mawile",
		'de-de': "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Mâchouille Malicieuse",
			'en-us': "Mischievous Crunch",
			'es-es': "Trituración Malvada",
			'it-it': "Sgranocchio Birichino",
			'pt-br': "Mastigada Maliciosa",
			'de-de': "Gemeiner Knirscher"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie {P} attachée à ce Pokémon.",
			'en-us': "This attack does 30 damage for each {P} Energy attached to this Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía {P} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia {P} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia {P} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {P}-Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725169,
				tcgplayer: 511758,
				cardtrader: 255774
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725169,
				tcgplayer: 511758,
				cardtrader: 255774
			}
		},
	],

	illustrator: "0313",

	
}

export default card
