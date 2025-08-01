import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
		es: "Walrein",
		it: "Walrein",
		pt: "Walrein",
		de: "Walraisa"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
				es: "Tumbar",
				it: "Sconvolgimento",
				pt: "Arrebatar",
				de: "Umwerfen"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser toute carte Stade en jeu.",
				es: "Puedes descartar cualquier carta de Estadio en juego.",
				it: "Puoi scartare una carta Stadio in gioco.",
				pt: "Você pode descartar qualquer card de Estádio em jogo.",
				de: "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Splash",
				fr: "Trempette Glacée",
				es: "Chapoteo Congelado",
				it: "Spruzzo Artico",
				pt: "Borrifada Congelada",
				de: "Frostiger Platscher"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, esse ataque causará 70 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "70+",

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
		cardmarket: 273579
	}
}

export default card
