import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'es-es': "Tyranitar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'de-de': "Despotar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'es-es': "Atizar",
				'it-it': "Schianto",
				'pt-br': "Pancada Brusca",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trample",
				'fr-fr': "Bousculade",
				'es-es': "Aplastamiento",
				'it-it': "Spallata",
				'pt-br': "Pisoteada",
				'de-de': "Niederschlagen"
			},
			effect: {
				'en-us': "For each Benched Pokémon (both yours and your opponent’s), flip a coin. If heads, this attack does 60 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c’est face, cette attaque inflige 60 dégâts au Pokémon ciblé. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Por cada Pokémon en Banca (tanto tuyos como de tu rival), lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño a ese Pokémon. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Lancia una moneta per ogni Pokémon in panchina, sia tuo che del tuo avversario. Se esce testa, questo attacco infligge 60 danni a quel Pokémon. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Jogue 1 moeda para cada Pokémon no Banco (seus e do seu oponente). Se sair cara, este ataque causará 60 pontos de dano àquele Pokémon. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Wirf 1 Münze für jedes Pokémon auf der Bank (deiner und der deines Gegners). Bei Kopf fügt diese Attacke jenem Pokémon 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it rampages, it knocks down mountains and buries rivers. Maps must be redrawn afterward.",
	},

	thirdParty: {
		cardmarket: 361331,
		tcgplayer: 170909
	}
}

export default card
