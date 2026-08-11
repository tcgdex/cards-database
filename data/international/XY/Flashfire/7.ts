import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Leaf Draw",
				'fr-fr': "Pioche Feuille",
				'es-es': "Robo Hoja",
				'it-it': "Pescafoglia",
				'pt-br': "Comprada de Folha",
				'de-de': "Blattzug"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Grass Energy card from your hand. If you do, draw 3 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Grass de votre main. Dans ce cas, piochez 3 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Grass de tu mano. Si lo haces, roba 3 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Grass che hai in mano. Se lo fai, pesca tre carte.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card de Energia Grass da sua mão. Se fizer isso, compre 3 cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Grass-Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deranged Dance",
				'fr-fr': "Danse Insensée",
				'es-es': "Danza Locura",
				'it-it': "Ballomatto",
				'pt-br': "Dança Desconcertada",
				'de-de': "Verrückter Tanz"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of Benched Pokémon (both yours and your opponent's).",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon in panchina, sia tuoi che del tuo avversario.",
				'pt-br': "Esse ataque causa 20 de danos vezes o número de Pokémon no Banco (tanto os seus quanto os do seu oponente).",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank (deiner und der deines Gegners) zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action.",
	},

	thirdParty: {
		cardmarket: 281490,
		tcgplayer: 91140
	}
}

export default card
