import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		'en-us': "Corvisquire",
		'fr-fr': "Bleuseille",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Rookidee",
		'fr-fr': "Minisange",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		'en-us': "The lessons of many harsh battles have taught it how to accurately judge an opponent's strength."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fury Attack",
			'fr-fr': "Furie",
			'de-de': "Furienschlag",
			'es-es': "Ataque Furia",
			'pt-br': "Ataque de Fúria",
			'it-it': "Furia"
		},

		damage: "30×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582956,
				tcgplayer: 253320
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582956,
				tcgplayer: 253320
			}
		},
	],
}

export default card
