import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Alolan Dugtrio",
		'fr-fr': "Triopikeur d’Alola",
		'es-es': "Dugtrio de Alola",
		'it-it': "Dugtrio di Alola",
		'pt-br': "Dugtrio de Alola",
		'de-de': "Alola-Digdri"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hair Wall",
				'fr-fr': "Mur Capillaire",
				'es-es': "Muro Capilar",
				'it-it': "Murochioma",
				'pt-br': "Muralha de Cabelo",
				'de-de': "Haarwall"
			},
			effect: {
				'en-us': "Your Metal Pokémon take 10 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				'fr-fr': "Vos Pokémon Metal subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tu rival hacen 10 puntos de daño menos a tus Pokémon Metal (después de aplicar Debilidad y Resistencia).",
				'it-it': "I tuoi Pokémon Metal subiscono 10 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Seus Pokémon Metal recebem 10 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Deinen Metal-Pokémon werden durch Attacken deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its metallic whiskers are heavy, so it's not very fast, but it has the power to dig through bedrock.",
	},

	thirdParty: {
		cardmarket: 372411,
		tcgplayer: 189221
	}
}

export default card
