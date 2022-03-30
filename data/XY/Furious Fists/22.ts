import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		614,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Igloo Hold",
				fr: "Piège Igloo",
				es: "Agarre Iglú",
				it: "Criostretta",
				pt: "Refúgio Iglu",
				de: "Iglugriff"
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Drop",
				fr: "Montagne Écrasante",
				es: "Caída Montaña Abajo",
				it: "Smottamento",
				pt: "Queda da Montanha",
				de: "Gebirgssturz"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 40 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
