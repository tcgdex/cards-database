import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [895],
	set: Set,

	name: {
		'fr-fr': "Regidrago V",
		'de-de': "Regidrago V",
		'es-es': "Regidrago V",
		'pt-br': "Regidrago V",
		'it-it': "Regidrago V",
		'en-us': "Regidrago V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Cri du Ciel",
			'de-de': "Himmelsgrollen",
			'es-es': "Rugido Celestial",
			'pt-br': "Rugido Celestial",
			'it-it': "Gentilboato",
			'en-us': "Celestial Roar"
		},

		effect: {
			'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Wenn unter jenen Karten Energiekarten sind, lege sie an dieses Pokémon an.",
			'es-es': "Descarta las 3 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon.",
			'pt-br': "Descarte as 3 cartas de cima do seu baralho. Se houver cartas de Energia entre elas, ligue-as a este Pokémon.",
			'it-it': "Scarta le prime tre carte del tuo mazzo. Se fra queste ci sono delle carte Energia, assegnale a questo Pokémon.",
			'en-us': "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon."
		}
	}, {
		cost: ["Grass", "Grass", "Fire"],

		name: {
			'fr-fr': "Laser Dragon",
			'de-de': "Drachenlaser",
			'es-es': "Láser Dragón",
			'pt-br': "Laser do Dragão",
			'it-it': "Dragolaser",
			'en-us': "Dragon Laser"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 682986
	}
}

export default card
