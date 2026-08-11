import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "M Mewtwo EX",
		'fr-fr': "M-Mewtwo EX",
		'es-es': "M-Mewtwo EX",
		'it-it': "M Mewtwo EX",
		'pt-br': "M-Mewtwo EX",
		'de-de': "M-Mewtu EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 230,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Mewtwo-EX",
		'fr-fr': "Mewtwo-EX",
		'es-es': "Mewtwo-EX",
		'it-it': "Mewtwo-EX",
		'pt-br': "Mewtwo-EX",
		'de-de': "Mewtu-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Vanishing Strike",
				'fr-fr': "Frappe Fuyante",
				'es-es': "Impacto Fuga",
				'it-it': "Dissolvicolpo",
				'pt-br': "Ataque Desvanecente",
				'de-de': "Auslöschender Treffer"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 50 more damage, and this attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires, et les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 50 puntos de daño más, y el daño de este ataque no se ve afectado por Resistencia ni por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 50 danni in più e i danni di questo attacco non sono influenzati dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 50 de danos adicionais, e os danos deste ataque não são afetados por Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 50 weitere Schadenspunkte zu und der Schaden dieses Angriffs wird durch Resistenz oder andere Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: "150+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 107276
	}
}

export default card
