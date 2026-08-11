import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Mewtwo EX",
		fr: "M-Mewtwo EX",
		es: "M-Mewtwo EX",
		it: "M Mewtwo EX",
		pt: "M-Mewtwo EX",
		de: "M-Mewtu EX"
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
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
		es: "Mewtwo-EX",
		it: "Mewtwo-EX",
		pt: "Mewtwo-EX",
		de: "Mewtu-EX"
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
				en: "Vanishing Strike",
				fr: "Frappe Fuyante",
				es: "Impacto Fuga",
				it: "Dissolvicolpo",
				pt: "Ataque Desvanecente",
				de: "Auslöschender Treffer"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage, and this attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires, et les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 50 puntos de daño más, y el daño de este ataque no se ve afectado por Resistencia ni por ningún efecto en el Pokémon Activo de tu rival.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 50 danni in più e i danni di questo attacco non sono influenzati dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 50 de danos adicionais, e os danos deste ataque não são afetados por Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 50 weitere Schadenspunkte zu und der Schaden dieses Angriffs wird durch Resistenz oder andere Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
