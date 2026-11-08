import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		'en-us': "Kyurem",
		'fr-fr': "Kyurem",
		'es-es': "Kyurem",
		'it-it': "Kyurem",
		'pt-br': "Kyurem",
		'de-de': "Kyurem"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Plasma Bane",
			'fr-fr': "Fléau Plasma",
			'es-es': "Azote Plasma",
			'it-it': "Anti-Plasma",
			'pt-br': "Maldição de Plasma",
			'de-de': "Plasma-Verderben"
		},

		effect: {
			'en-us': "If your opponent has any cards in their discard pile that have \"Colress\" in the name, this Pokémon can use the Trifrost attack for {C}.",
			'fr-fr': "Si votre adversaire a dans sa pile de défausse au moins une carte ayant \" Nikolaï \" dans son nom, ce Pokémon peut utiliser l'attaque Triple Givre pour {C}.",
			'es-es': "Si tu rival tiene alguna carta en su pila de descartes que tenga \"Acromo\" en el nombre, este Pokémon puede usar el ataque Triple Escarcha por Colorless.",
			'it-it': "Se il tuo avversario ha delle carte nella sua pila degli scarti che hanno \"Acromio\" o \"Acrocongegno\" nel nome, questo Pokémon può usare l'attacco Triplogelo al costo di {C}.",
			'pt-br': "Se o seu oponente tiver alguma carta na pilha de descarte dele que tem \"Colress\" em seu nome, este Pokémon poderá usar o ataque Geada Tripla por {C}.",
			'de-de': "Wenn dein Gegner mindestens 1 Karte in seinem Ablagestapel hat, bei der \"Achromas\" zum Namen gehört, kann dieses Pokémon die Attacke Dreifachfrost für {C} einsetzen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Trifrost",
			'fr-fr': "Triple Givre",
			'es-es': "Triple Escarcha",
			'it-it': "Triplogelo",
			'pt-br': "Geada Tripla",
			'de-de': "Dreifachfrost"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. This attack does 110 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 110 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías de este Pokémon. Este ataque hace 110 puntos de daño a 3 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 110 danni a tre dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 110 pontos de dano a 3 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 3 Pokémon deines Gegners 110 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "H",


	illustrator: "Shiburingaru",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780943,
				tcgplayer: 560358
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780943,
				tcgplayer: 560358
			}
		},
	],
}

export default card
