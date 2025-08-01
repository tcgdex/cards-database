import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
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
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leaf Draw",
				fr: "Pioche Feuille",
				es: "Robo Hoja",
				it: "Pescafoglia",
				pt: "Comprada de Folha",
				de: "Blattzug"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Grass Energy card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Grass de votre main. Dans ce cas, piochez 3 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Grass de tu mano. Si lo haces, roba 3 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Grass che hai in mano. Se lo fai, pesca tre carte.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card de Energia Grass da sua mão. Se fizer isso, compre 3 cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Grass-Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
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
				en: "Deranged Dance",
				fr: "Danse Insensée",
				es: "Danza Locura",
				it: "Ballomatto",
				pt: "Dança Desconcertada",
				de: "Verrückter Tanz"
			},
			effect: {
				en: "This attack does 20 damage times the number of Benched Pokémon (both yours and your opponent's).",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				it: "Questo attacco infligge 20 danni per ogni Pokémon in panchina, sia tuoi che del tuo avversario.",
				pt: "Esse ataque causa 20 de danos vezes o número de Pokémon no Banco (tanto os seus quanto os do seu oponente).",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank (deiner und der deines Gegners) zu."
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

	thirdParty: {
		cardmarket: 281490
	}
}

export default card
