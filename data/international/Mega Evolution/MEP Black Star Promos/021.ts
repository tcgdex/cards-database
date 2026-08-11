import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'de-de': "Snibunna",
		'it-it': "Weavile",
		'es-es': "Weavile",
		'pt-br': "Weavile"
	},

	illustrator: "matazo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [461],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'de-de': "Sniebel",
		'it-it': "Sneasel",
		'es-es': "Sneasel",
		'pt-br': "Sneasel"
	},

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Retaliatory Claw",
			'fr-fr': "Griffe Représailles",
			'de-de': "Vergeltungskralle",
			'it-it': "Artiglio Ritorsivo",
			'es-es': "Garra Vengativa",
			'pt-br': "Garra Retaliatória"
		},

		damage: "20+",

		effect: {
			'en-us': "If this Pokémon's remaining HP is 50 or less, this attack does 170 more damage.",
			'fr-fr': "S'il reste 50 PV ou moins à ce Pokémon, cette attaque inflige 170 dégâts supplémentaires.",
			'de-de': "Wenn dieses Pokémon 50 oder weniger verbleibende KP hat, fügt diese Attacke 170 Schadenspunkte mehr zu.",
			'it-it': "Se i PS rimanenti di questo Pokémon sono 50 o meno, questo attacco infligge 170 danni in più.",
			'es-es': "Si a este Pokémon le quedan 50 PS o menos, este ataque hace 170 puntos de daño más.",
			'pt-br': "Se o PS restante deste Pokémon for 50 ou menos, este ataque causará 170 pontos de dano a mais."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'de-de': "Zerschneider",
			'it-it': "Taglio",
			'es-es': "Corte",
			'pt-br': "Cortar"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859026,
				tcgplayer: 664063
			}
		},
	],
}

export default card
