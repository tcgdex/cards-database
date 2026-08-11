import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		'en-us': "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Explosive Discontent",
			'fr-fr': "Mécontentement Explosif",
			'de-de': "Stinksaure Explosion",
			'es-es': "Descontento Explosivo",
			'pt-br': "Desagrado Explosivo",
			'it-it': "Malcontento Esplosivo"
		},

		damage: "30×",

		effect: {
			'en-us': "This attack does 30 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582807,
				tcgplayer: 253393
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582807,
				tcgplayer: 253393
			}
		},
	],
}

export default card
