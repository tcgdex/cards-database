import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Burrow",
			'fr-fr': "Terrier",
			'es-es': "Escarbar",
			'it-it': "Buca",
			'pt-br': "Toca",
			'de-de': "Verbuddeln"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794435,
				tcgplayer: 589926
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794435,
				tcgplayer: 589926
			}
		},
	],

	illustrator: "Ounishi",

}

export default card
