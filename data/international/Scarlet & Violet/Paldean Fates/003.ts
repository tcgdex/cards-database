import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Pin Missile",
			'fr-fr': "Dard-Nuée",
			'es-es': "Pin Misil",
			'it-it': "Missilspillo",
			'pt-br': "Míssil de Espinhos",
			'de-de': "Nadelrakete"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751529,
				tcgplayer: 534136,
				cardtrader: 274187
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751529,
				tcgplayer: 534136,
				cardtrader: 274187
			}
		},
	],

	illustrator: "Masako Tomii",

	description: {
		'en-us': "Once each year, this Pokémon scatters its seeds. They're jam-packed with nutrients, making them a precious food source out in the desert.",
	},

}

export default card
