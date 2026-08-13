import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		it: "Marowak",
		de: "Knogga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
		it: "Cubone",
		de: "Tragosso"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bonemerang",
				fr: "Osmerang",
				it: "Ossomerang",
				de: "Knochmerang"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Call for Friend",
				fr: "À la rescousse !",
				it: "Cerca Amici",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for a Fighting Basic Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck une carte Pokémon  de base et placez-la sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				it: "Cerca nel tuo mazzo un Pokémon Base Combattimento e mettilo nella tua Panchina. Poi rimischia le carte del tuo mazzo (se la tua Panchina è già completa non puoi usare questo attacco).",
				de: "Suche in deinem Deck nach einer {F} Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht einsetzen, wenn deine Bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to K.O. targets.",
		fr: "L'os qu'il tient dans sa main est une arme. Il peut le lancer avec adresse pour assommer sa proie.",
		it: "Usa le ossa come vere e proprie armi. Le lancia abilmente come se fossero boomerang per mettere K.O. i nemici.",
		de: "Seine Schlüsselwaffe ist der Knochen, den es hält. Es wirft den Knochen geschickt wie einen Bumerang, um Feinde kampfunfähig zu machen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273836,
				tcgplayer: 45142
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273836,
				tcgplayer: 45142
			}
		}
	],
}

export default card
