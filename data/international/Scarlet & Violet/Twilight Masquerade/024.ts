import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Teal Mask Ogerpon",
		'fr-fr': "Ogerpon Masque Turquoise",
		'es-es': "Ogerpon Máscara Turquesa",
		'it-it': "Ogerpon Maschera Turchese",
		'pt-br': "Ogerpon Máscara Turquesa",
		'de-de': "Türkisgrüne-Maske-Ogerpon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mountain Stroll",
			'fr-fr': "Promenade en Montagne",
			'es-es': "Paseo por la Montaña",
			'it-it': "Passeggiata Montana",
			'pt-br': "Passeio na Montanha",
			'de-de': "Bergspaziergang"
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
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Ogre Comeback",
			'fr-fr': "Retour du Monstre",
			'es-es': "Venganza del Ogro",
			'it-it': "Ritorno dell'Orco",
			'pt-br': "Troco do Ogro",
			'de-de': "Oni-Comeback"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769198,
				tcgplayer: 550068
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769198,
				tcgplayer: 550068
			}
		},
		{
			type: "holo",
			stamp: ["gamestop"],
			thirdParty: {
				cardmarket: 771356,
			}
		},
		{
			type: "holo",
			stamp: ["eb-games"],
			thirdParty: {
				cardmarket: 771357,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 786105,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 800148,
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

}

export default card
