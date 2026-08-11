import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'es-es': "Dewgong",
		'es-mx': "Dewgong",
		'de-de': "Jugong",
		'it-it': "Dewgong",
		'pt-br': "Dewgong"
	},

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'es-mx': "Seel",
		'de-de': "Jurob",
		'it-it': "Seel",
		'pt-br': "Seel",
	},

	rarity: "Illustration rare",
	category: "Pokemon",

	dexId: [87],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thick Fat",
			'fr-fr': "Isograisse",
			'es-es': "Sebo",
			'es-mx': "Sebo",
			'de-de': "Speckschicht",
			'it-it': "Grassospesso",
			'pt-br': "Gordura Espessa"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks from your opponent's {R} or {W} Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon {R} ou {W} de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon {R} o {W} de tu rival hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 30 puntos de daño menos de los ataques de los Pokémon {R} o {W} de tu rival (después de aplicar Debilidad y Resistencia).",
			'de-de': "Diesem Pokémon werden durch Attacken von {R}- oder {W}-Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi dei Pokémon {R} o {W} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques dos Pokémon {R} ou {W} do seu oponente (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Slam",
			'fr-fr': "Souplesse",
			'es-es': "Atizar",
			'es-mx': "Golpazo",
			'de-de': "Slam",
			'it-it': "Schianto",
			'pt-br': "Pancada Brusca"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It sleeps under shallow ocean waters during the day, then looks for food at night when it's colder.",
	},

	illustrator: "satoma",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857672,
				tcgplayer: 662152,
				cardtrader: 356883
			}
		},
	],	
}

export default card
