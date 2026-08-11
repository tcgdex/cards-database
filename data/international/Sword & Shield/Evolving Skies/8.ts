import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Leafeon VMAX",
		'fr-fr': "Phyllali VMAX",
		'es-es': "Leafeon VMAX",
		'it-it': "Leafeon VMAX",
		'pt-br': "Leafeon VMAX",
		'de-de': "Folipurba VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		name: {
			'en-us': "Grass Knot",
			'fr-fr': "Nœud Herbe",
			'es-es': "Hierba Lazo",
			'it-it': "Laccioerboso",
			'pt-br': "Grass Knot",
			'de-de': "Strauchler"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Max Leaf",
			'fr-fr': "Feuillomax",
			'es-es': "Maxihoja",
			'it-it': "Dynafoglia",
			'pt-br': "Max Leaf",
			'de-de': "Dyna-Blatt"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Heal 30 damage from this Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 170,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Leafeon V",
		'fr-fr': "Phyllali-V",
		'es-es': "Leafeon V",
		'it-it': "Leafeon-V",
		'pt-br': "Leafeon V",
		'de-de': "Folipurba-V"
	},

	dexId: [470],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574032,
				tcgplayer: 246691
			}
		},
	],
}

export default card
