import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Gyarados V",
		'fr-fr': "Léviator V",
		'es-es': "Gyarados V",
		'it-it': "Gyarados V",
		'pt-br': "Gyarados V",
		'de-de': "Garados V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		name: {
			'en-us': "Get Angry",
			'fr-fr': "Coléreux",
			'es-es': "Enfadarse",
			'it-it': "Tutte le Furie",
			'pt-br': "Get Angry",
			'de-de': "Rotsehen"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "This attack does 20 damage for each damage counter on this Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'en-us': "Heavy Storm",
			'fr-fr': "Grosse Tempête",
			'es-es': "Fuerte Tormenta",
			'it-it': "Grantempesta",
			'pt-br': "Heavy Storm",
			'de-de': "Schwerer Sturm"
		},

		damage: 180,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	dexId: [130],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574229,
				tcgplayer: 246732
			}
		},
	],
}

export default card
