import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'es-es': "Whiscash",
		'it-it': "Whiscash",
		'pt-br': "Whiscash",
		'de-de': "Welsar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d’Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Landslip",
				'fr-fr': "Affaissement de Terrain",
				'es-es': "Deslizamiento",
				'it-it': "Franamento",
				'pt-br': "Deslize",
				'de-de': "Erdsturz"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Descarta las 3 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía descartada de esta manera.",
				'it-it': "Scarta le prime tre carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
				'pt-br': "Descarte as 3 primeiras cartas do seu baralho. Este ataque causa 100 pontos de dano para cada carta de Energia descartada desta forma.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt 100 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Energiekarten zu."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A glutton that devours anything that moves, it quietly lurks at the bottom of swamps, lying in wait for prey.",
	},

	thirdParty: {
		cardmarket: 297532,
		tcgplayer: 130981
	}
}

export default card
