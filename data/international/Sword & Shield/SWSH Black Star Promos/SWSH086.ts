import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Cramorant V",
		'fr-fr': "Nigosier V",
		'de-de': "Urgl V",
		'es-es': "Cramorant V",
		'pt-br': "Cramorant V",
		'it-it': "Cramorant V"
	},

	rarity: "Promo",
	dexId: [845],
	hp: 200,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beak Catch",
			'fr-fr': "Bec Gobeur",
			'de-de': "Schnabelfang",
			'es-es': "Captura Pico",
			'pt-br': "Captura de Bico",
			'it-it': "Catturbecco"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spit Shot",
			'fr-fr': "Tir Rejet",
			'de-de': "Spuckschuss",
			'es-es': "Lanzamiento Escupitajo",
			'pt-br': "Cusparada",
			'it-it': "Colposputo"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. This attack does 160 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Descarta todas las Energías de este Pokémon. Este ataque hace 160 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 160 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 160 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 540651
	}
}

export default card
