import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Parting Shot",
				fr: "Dernier Mot",
				es: "Última Palabra",
				it: "Monito",
				pt: "Tiro Divisor",
				de: "Abgangstirade"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 60 (before applying Weakness and Resistance).",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc. Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 60 (avant application de la Faiblesse et de la Résistance).",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 60 (antes de aplicar Debilidad y Resistencia).",
				it: "Scambia questo Pokémon con uno della tua panchina. Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 60, prima di aver applicato debolezza e resistenza.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Na próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 60 (antes da aplicação de Fraqueza e Resistência).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 60 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Buster Swing",
				fr: "Repoussoir",
				es: "Golpe Destructor",
				it: "Colpaccio",
				pt: "Gingado",
				de: "Widerstandsbrecher"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 90,

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
