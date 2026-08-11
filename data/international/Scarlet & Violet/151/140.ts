import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [140],
	set: Set,

	name: {
		'fr-fr': "Kabuto",
		'en-us': "Kabuto",
		'es-es': "Kabuto",
		'it-it': "Kabuto",
		'pt-br': "Kabuto",
		'de-de': "Kabuto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Fossile Dôme Ancien",
		'en-us': "Antique Dome Fossil",
		'es-es': "Fósil Domo Antiguo",
		'it-it': "Vecchio Domofossile",
		'pt-br': "Fóssil Cúpula Arcaico",
		'de-de': "Antikes Domfossil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Double Écorchure",
			'en-us': "Double Scratch",
			'es-es': "Arañazo Doble",
			'it-it': "Doppio Graffio",
			'pt-br': "Arranhão Duplo",
			'de-de': "Doppelkratzer"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "While some say this species has gone extinct, Kabuto sightings are apparently fairly common in some places.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733735,
				tcgplayer: 516703,
				cardtrader: 261187
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733735,
				tcgplayer: 516703,
				cardtrader: 261187
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
