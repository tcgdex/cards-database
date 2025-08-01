import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
		es: "Avalugg",
		it: "Avalugg",
		pt: "Avalugg",
		de: "Arktilas"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		713,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		it: "Bergmite",
		pt: "Bergmite",
		de: "Arktip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Barrier",
				fr: "Barrière de Givre",
				es: "Barrera Gélida",
				it: "Gelobarriera",
				pt: "Barreira Congelada",
				de: "Frostschutz"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño hecho a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shatter",
				fr: "Fracas",
				es: "Fragmentar",
				it: "Frantumare",
				pt: "Estilhaçar",
				de: "Zertrümmern"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer card de Estádio em jogo.",
				de: "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281514
	}
}

export default card
