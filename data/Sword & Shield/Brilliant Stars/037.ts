import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		pt: "Empoleon",
		de: "Impoleon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Emergency Surfacing",
			fr: "Remontée d'Urgence",
			es: "Reflote de Emergencia",
			it: "Emersione di Emergenza",
			pt: "Emersão Emergencial",
			de: "Notauftauchen"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your discard pile and you have no cards in your hand, you may put this Pokémon onto your Bench. If you do, draw 3 cards.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre pile de défausse et que vous n'avez aucune carte dans votre main, vous pouvez placer ce Pokémon sur votre Banc. Dans ce cas, piochez 3 cartes.",
			es: "Una vez durante tu turno, si este Pokémon está en tu pila de descartes y no tienes ninguna carta en tu mano, puedes poner este Pokémon en tu Banca. Si lo haces, roba 3 cartas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua pila degli scarti e non hai carte in mano, puoi mettere questo Pokémon nella tua panchina. Se lo fai, pesca tre carte.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua pilha de descarte e você não tiver cartas na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in deinem Ablagestapel ist und du keine Karten auf deiner Hand hast, kannst du dieses Pokémon auf deine Bank legen. Wenn du das machst, ziehe 3 Karten."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Arrow",
			fr: "Flèche d'Eau",
			es: "Flecha de Agua",
			it: "Idrofreccia",
			pt: "Flecha d'Água",
			de: "Wasserpfeil"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card