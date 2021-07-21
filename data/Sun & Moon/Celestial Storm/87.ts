import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		it: "Tyranitar",
		pt: "Tyranitar",
		de: "Despotar"
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
		en: "Pupitar",
		fr: "Ymphect",
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
				en: "Slam",
				fr: "Souplesse",
				es: "Atizar",
				it: "Schianto",
				pt: "Pancada Brusca",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
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
				en: "Trample",
				fr: "Bousculade",
				es: "Aplastamiento",
				it: "Spallata",
				pt: "Pisoteada",
				de: "Niederschlagen"
			},
			effect: {
				en: "For each Benched Pokémon (both yours and your opponent’s), flip a coin. If heads, this attack does 60 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c’est face, cette attaque inflige 60 dégâts au Pokémon ciblé. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Por cada Pokémon en Banca (tanto tuyos como de tu rival), lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño a ese Pokémon. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "Lancia una moneta per ogni Pokémon in panchina, sia tuo che del tuo avversario. Se esce testa, questo attacco infligge 60 danni a quel Pokémon. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Jogue 1 moeda para cada Pokémon no Banco (seus e do seu oponente). Se sair cara, este ataque causará 60 pontos de dano àquele Pokémon. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Wirf 1 Münze für jedes Pokémon auf der Bank (deiner und der deines Gegners). Bei Kopf fügt diese Attacke jenem Pokémon 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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



}

export default card
