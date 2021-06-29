import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Drastic Draw",
			fr: "Pioche Radicale",
			es: "Robo Drástico",
			it: "Pesca Drastica",
			pt: "Compra Drástica",
			de: "Drastischer Zug"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes robar 3 cartas.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare tre carte.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá comprar 3 cartas.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d’Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0
}

export default card