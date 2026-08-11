import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [660],

	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mining Rush",
				'fr-fr': "Excavation Hâtive",
				'es-es': "Fiebre Minera",
				'it-it': "Scavo Alacre",
				'pt-br': "Mineração Acelerada",
				'de-de': "Schaufelansturm"
			},
			effect: {
				'en-us': "Discard up to 6 cards from the top of your deck. If you do, this attack does 30 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez jusqu'à 6 cartes du dessus de votre deck. Dans ce cas, cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta hasta 6 cartas de la parte superior de tu baraja. Si lo haces, este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta fino a sei carte dalla cima del tuo mazzo. Se lo fai, questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte até 6 cartas de cima do seu baralho. Se fizer isto, este ataque causará 30 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege bis zu 6 Karten von deinem Deck auf deinen Ablagestapel. Wenn du das machst, fügt diese Attacke für jede auf diese Weise auf deinen Ablagestapel gelegte Karte 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "With power equal to an excavator, it can dig through dense bedrock. It's a huge help during tunnel construction."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458133,
				tcgplayer: 213247
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458133,
				tcgplayer: 213247
			}
		},
	],
}

export default card
