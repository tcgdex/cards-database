import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'es-es': "Sandslash",
		'it-it': "Sandslash",
		'pt-br': "Sandslash",
		'de-de': "Sandamer"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Scratch",
				'fr-fr': "Griffe Continue",
				'es-es': "Arañazo Incesante",
				'it-it': "Graffio Infinito",
				'pt-br': "Arranhão Contínuo",
				'de-de': "Dauerkratzer"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tourbi-Sable",
				'es-es': "Bucle Arena",
				'it-it': "Sabbiotomba",
				'pt-br': "Fosso de Areia",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its claws and horns often break off. The broken claws and horns can be used to carve plows for tilling farm fields.",
	},

	thirdParty: {
		cardmarket: 372375,
		tcgplayer: 189183
	}
}

export default card
