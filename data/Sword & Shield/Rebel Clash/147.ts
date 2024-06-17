import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [660],
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mining Rush",
				fr: "Excavation Hâtive",
				es: "Fiebre Minera",
				it: "Scavo Alacre",
				pt: "Mineração Acelerada",
				de: "Schaufelansturm"
			},
			effect: {
				en: "Discard up to 6 cards from the top of your deck. If you do, this attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu'à 6 cartes du dessus de votre deck. Dans ce cas, cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta hasta 6 cartas de la parte superior de tu baraja. Si lo haces, este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a sei carte dalla cima del tuo mazzo. Se lo fai, questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 6 cartas de cima do seu baralho. Se fizer isto, este ataque causará 30 pontos de dano para cada carta descartada desta forma.",
				de: "Lege bis zu 6 Karten von deinem Deck auf deinen Ablagestapel. Wenn du das machst, fügt diese Attacke für jede auf diese Weise auf deinen Ablagestapel gelegte Karte 30 Schadenspunkte zu."
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
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
				es: "Bote Cabezazo",
				it: "Rimbalzo Bottintesta",
				pt: "Cabeçada Ricochete",
				de: "Abrupter Kopfstoß"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "With power equal to an excavator, it can dig through dense bedrock. It's a huge help during tunnel construction."
	}
}

export default card
