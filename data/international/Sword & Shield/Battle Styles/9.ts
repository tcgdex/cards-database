import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [455],
	set: Set,

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Triple Whip",
			'fr-fr': "Triple Fouet",
			'es-es': "Triple Latigazo",
			'it-it': "Triplafrustata",
			'pt-br': "Chicote Triplo",
			'de-de': "Tripelpeitsche"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544941,
				tcgplayer: 234058
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544941,
				tcgplayer: 234058
			}
		},
	],
}

export default card
