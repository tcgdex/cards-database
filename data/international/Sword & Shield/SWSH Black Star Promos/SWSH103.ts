import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blastoise VMAX",
		'fr-fr': "Tortank VMAX",
		'es-es': "Blastoise VMAX",
		'it-it': "Blastoise VMAX",
		'pt-br': "Blastoise VMAX",
		'de-de': "Turtok VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Blastoise V",
		'fr-fr': "Tortank-V",
		'de-de': "Turtok-V",
		'es-es': "Blastoise V",
		'pt-br': "Blastoise V",
		'it-it': "Blastoise-V"
	},

	attacks: [{
		name: {
			'en-us': "Grand Falls",
			'fr-fr': "Cascade Grandiose",
			'es-es': "Gran Cascada",
			'it-it': "Cascata Maestosa",
			'pt-br': "Grande Catarata",
			'de-de': "Gewaltige Fälle"
		},

		effect: {
			'en-us': "Search your deck for up to 3 {W} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie {W}, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía {W} y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia {W} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia {W} no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 {W}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		damage: 120,
		cost: ["Water", "Water", "Water"]
	}, {
		name: {
			'en-us': "G-Max Bombard",
			'fr-fr': "Bombardement G-Max",
			'es-es': "Gigabombardeo",
			'it-it': "Gigabombardamento",
			'pt-br': "Bombardeio G-Max",
			'de-de': "Giga-Kanone"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 220,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	stage: "VMAX",
	dexId: [9],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546986
	}
}

export default card
