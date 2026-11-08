import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'fr-fr': "Nigosier VMAX",
		'en-us': "Cramorant VMAX",
		'es-es': "Cramorant VMAX",
		'it-it': "Cramorant VMAX",
		'pt-br': "Cramorant VMAX",
		'de-de': "Urgl VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Nigosier-V",
		'en-us': "Cramorant V"
	},

	attacks: [{
		name: {
			'fr-fr': "Jetomax",
			'en-us': "Max Jet",
			'es-es': "Maxipropulsión",
			'it-it': "Dynagetto",
			'pt-br': "Jato Max",
			'de-de': "Dyna-Schwall"
		},

		effect: {
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539298,
				tcgplayer: 232534
			}
		},
	],
}

export default card
