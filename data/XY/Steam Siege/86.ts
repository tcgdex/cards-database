import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cruel Fang",
				fr: "Croc Cruel",
				es: "Colmillo Cruel",
				it: "Zanne Crudeli",
				pt: "Canino Cruel",
				de: "Grausame Fänge"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 40 (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 40, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 40 (antes da aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 40 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Burn",
				fr: "Brûlure Obscure",
				es: "Quemadura Oscura",
				it: "Bruciabuio",
				pt: "Queimadura Escura",
				de: "Schwarzer Brand"
			},
			effect: {
				en: "Discard as many Darkness Energy attached to your Pokémon as you like. This attack does 50 damage times the amount of Darkness Energy you discarded in this way.",
				fr: "Défaussez autant d'Énergies Darkness attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Darkness défaussées de cette façon.",
				es: "Descarta tantas Energías Darkness unidas a tus Pokémon como quieras. Este ataque hace 50 puntos de daño por cada Energía Darkness que hayas descartado de esta manera.",
				it: "Scarta a piacimento le Energie Darkness assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta Energia Darkness che hai scartato in questo modo.",
				pt: "Descarte tantas Energias Darkness ligadas aos seus Pokémon quanto desejar. Este ataque causa 50 de danos vezes a quantidade de cards de Energia Darkness descartados desta forma.",
				de: "Lege beliebig viele an deine Pokémon angelegte Darkness-Energien auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte für jede der auf diese Weise abgelegte Darkness-Energie zu."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
