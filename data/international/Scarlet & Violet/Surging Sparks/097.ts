import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [999],
	set: Set,

	name: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'es-es': "Gimmighoul",
		'it-it': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'de-de': "Gierspenst"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Minor Errand-Running",
			'fr-fr': "Rendez-Vous Mineur",
			'es-es': "Recado Menor",
			'it-it': "Lavoretto Rapido",
			'pt-br': "Pequena Missão",
			'de-de': "Kleine Besorgung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794409,
				tcgplayer: 589955
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794409,
				tcgplayer: 589955
			}
		},
	],

	illustrator: "Scav",

}

export default card
