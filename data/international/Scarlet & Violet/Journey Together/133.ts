import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [821],
	set: Set,

	name: {
		'en-us': "Hop's Rookidee",
		'fr-fr': "Minisange de Nabil",
		'es-es': "Rookidee de Paul",
		'de-de': "Hops Meikro",
		'it-it': "Rookidee di Hop",
		'pt-br': "Rookidee do Lupo",
		'es-mx': "Rookidee de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Intimidating Stare",
			'fr-fr': "Yeux Intimidants",
			'es-es': "Mirada Intimidante",
			'de-de': "Einschüchterndes Starren",
			'it-it': "Sguardo Intimidatorio",
			'pt-br': "Encarada",
			'es-mx': "Mirada Intimidante"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'de-de': "Pikser",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Shinya Mizuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817285,
				tcgplayer: 623560
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817285,
				tcgplayer: 623560
			}
		},
	],
}

export default card
