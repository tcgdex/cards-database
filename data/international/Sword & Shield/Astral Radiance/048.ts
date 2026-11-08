import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [713],
	set: Set,

	name: {
		'en-us': "Hisuian Avalugg",
		'fr-fr': "Séracrawl de Hisui",
		'es-es': "Avalugg de Hisui",
		'it-it': "Avalugg di Hisui",
		'pt-br': "Avalugg de Hisui",
		'de-de': "Hisui-Arktilas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Massive Ice",
			'fr-fr': "Glace Massive",
			'es-es': "Hielo Masivo",
			'it-it': "Superghiaccio",
			'pt-br': "Gelo Massivo",
			'de-de': "Massives Eis"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Mountain Gale",
			'fr-fr': "Bise Glaciaire",
			'es-es': "Viento Carámbano",
			'it-it': "Soffio d'Iceberg",
			'pt-br': "Vendaval Montanhoso",
			'de-de': "Frostfallwind"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The armor of ice covering its lower jaw puts steel to shame and can shatter rocks with ease. This Pokémon barrels along steep mountain paths, cleaving through the deep snow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658589,
				tcgplayer: 272248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658589,
				tcgplayer: 272248
			}
		},
	],
}

export default card
