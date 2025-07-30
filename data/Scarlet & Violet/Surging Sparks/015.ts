import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Wo-Chien",
		fr: "Chongjian",
		es: "Wo-Chien",
		it: "Wo-Chien",
		pt: "Wo-Chien",
		de: "Chongjian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Hazardous Greed",
			fr: "Avidité Risquée",
			es: "Avaricia Peligrosa",
			it: "Avidità Pericolosa",
			pt: "Ganância Periculosa",
			de: "Gefährliche Gier"
		},

		effect: {
			en: "If there are 3 or fewer cards in your deck, this attack also does 120 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige aussi 120 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Si hay 3 cartas o menos en tu baraja, este ataque también hace 120 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge anche 120 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Se houver 3 ou menos cartas no seu baralho, este ataque também causará 120 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke auch 2 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Entangling Whip",
			fr: "Fouet Emmêlant",
			es: "Látigo Estrangulador",
			it: "Frustata Avvolgente",
			pt: "Chicote Entrelaçador",
			de: "Verfängliche Peitsche"
		},

		effect: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
			es: "Descarta las 3 primeras cartas de tu baraja.",
			it: "Scarta le prime tre carte del tuo mazzo.",
			pt: "Descarte as 3 cartas de cima do seu baralho.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "danciao",

	thirdParty: {
		cardmarket: 794270
	}
}

export default card
