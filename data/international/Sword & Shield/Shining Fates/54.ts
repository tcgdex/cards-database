import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'fr-fr': "Nigosier V",
		'en-us': "Cramorant V",
		'es-es': "Cramorant V",
		'it-it': "Cramorant V",
		'pt-br': "Cramorant V",
		'de-de': "Urgl V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Bec Gobeur",
			'en-us': "Beak Catch",
			'es-es': "Captura Pico",
			'it-it': "Catturbecco",
			'pt-br': "Captura de Bico",
			'de-de': "Schnabelfang"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Tir Rejet",
			'en-us': "Spit Shot",
			'es-es': "Lanzamiento Escupitajo",
			'it-it': "Colposputo",
			'pt-br': "Cusparada",
			'de-de': "Spuckschuss"
		},

		effect: {
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "Discard all Energy from this Pokémon. This attack does 160 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Descarta todas las Energías de este Pokémon. Este ataque hace 160 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 160 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 160 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539293,
				tcgplayer: 232532
			}
		},
	],
}

export default card
