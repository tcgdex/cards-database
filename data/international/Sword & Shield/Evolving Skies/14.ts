import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Trevenant VMAX",
		'fr-fr': "Desséliande VMAX",
		'es-es': "Trevenant VMAX",
		'it-it': "Trevenant VMAX",
		'pt-br': "Trevenant VMAX",
		'de-de': "Trombork VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "MUGENUP",

	attacks: [{
		name: {
			'en-us': "Missing in the Forest",
			'fr-fr': "Perdus en Forêt",
			'es-es': "Desaparecidos en el Bosque",
			'it-it': "Persi nella Foresta",
			'pt-br': "Missing in the Forest",
			'de-de': "Verschollen im Wald"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Supporter card in your opponent's discard pile.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque carte Supporter dans la pile de défausse de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño por cada carta de Partidario en la pila de descartes de tu rival.",
			'it-it': "Questo attacco infligge 40 danni per ogni carta Aiuto nella pila degli scarti del tuo avversario.",
			'pt-br': "This attack does 40 damage for each Supporter card in your opponent's discard pile.",
			'de-de': "Diese Attacke fügt für jede Unterstützerkarte im Ablagestapel deines Gegners 40 Schadenspunkte zu."
		},

		damage: "40×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Max Tree",
			'fr-fr': "Arbromax",
			'es-es': "Maxiárbol",
			'it-it': "Dynatronco",
			'pt-br': "Max Tree",
			'de-de': "Dyna-Baum"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Trevenant V",
		'fr-fr': "Desséliande-V",
		'es-es': "Trevenant V",
		'it-it': "Trevenant-V",
		'pt-br': "Trevenant V",
		'de-de': "Trombork-V"
	},

	dexId: [709],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574038,
				tcgplayer: 246708
			}
		},
	],
}

export default card
