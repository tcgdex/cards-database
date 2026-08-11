import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		'en-us': "Rabsca",
		'fr-fr': "Bérasca",
		'es-es': "Rabsca",
		'it-it': "Rabsca",
		'pt-br': "Rabsca",
		'de-de': "Skarabaks"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'es-es': "Triple Robo",
			'it-it': "Pescata Tripla",
			'pt-br': "Compra Tripla",
			'de-de': "Dreifachzug"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas.",
			'de-de': "Ziehe 3 Karten."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Counterturn",
			'fr-fr': "Contre-Tour",
			'es-es': "Giro Inesperado",
			'it-it': "Controsvolta",
			'pt-br': "Reviravolta",
			'de-de': "Gegenzug"
		},

		effect: {
			'en-us': "If there are 3 or fewer cards in your deck, this attack does 200 more damage.",
			'fr-fr': "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige 200 dégâts supplémentaires.",
			'es-es': "Si hay 3 cartas o menos en tu baraja, este ataque hace 200 puntos de daño más.",
			'it-it': "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 200 danni in più.",
			'pt-br': "Se houver 3 ou menos cartas no seu baralho, este ataque causará 200 pontos de dano a mais.",
			'de-de': "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 200 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794269,
				tcgplayer: 590033
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794269,
				tcgplayer: 590033
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 799715,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858726,
			}
		},
	],

	illustrator: "Masako Tomii",
	
}

export default card
