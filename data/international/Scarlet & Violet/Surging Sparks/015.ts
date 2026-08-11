import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1001],
	set: Set,

	name: {
		'en-us': "Wo-Chien",
		'fr-fr': "Chongjian",
		'es-es': "Wo-Chien",
		'it-it': "Wo-Chien",
		'pt-br': "Wo-Chien",
		'de-de': "Chongjian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Hazardous Greed",
			'fr-fr': "Avidité Risquée",
			'es-es': "Avaricia Peligrosa",
			'it-it': "Avidità Pericolosa",
			'pt-br': "Ganância Periculosa",
			'de-de': "Gefährliche Gier"
		},

		effect: {
			'en-us': "If there are 3 or fewer cards in your deck, this attack also does 120 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige aussi 120 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Si hay 3 cartas o menos en tu baraja, este ataque también hace 120 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge anche 120 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Se houver 3 ou menos cartas no seu baralho, este ataque também causará 120 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke auch 2 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Entangling Whip",
			'fr-fr': "Fouet Emmêlant",
			'es-es': "Látigo Estrangulador",
			'it-it': "Frustata Avvolgente",
			'pt-br': "Chicote Entrelaçador",
			'de-de': "Verfängliche Peitsche"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your deck.",
			'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
			'es-es': "Descarta las 3 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime tre carte del tuo mazzo.",
			'pt-br': "Descarte as 3 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794270,
				tcgplayer: 590095
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794270,
				tcgplayer: 590095
			}
		},
	],

	illustrator: "danciao",
	
}

export default card
