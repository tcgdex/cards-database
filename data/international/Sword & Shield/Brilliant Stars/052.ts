import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Windup Thunder",
			'fr-fr': "Tonnerre Mécanique",
			'es-es': "Trueno a Cuerda",
			'it-it': "Tuono Caricato",
			'pt-br': "Trovão de Corda",
			'de-de': "Aufziehdonner"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608502,
				tcgplayer: 263758
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608502,
				tcgplayer: 263758
			}
		},
	],
}

export default card
