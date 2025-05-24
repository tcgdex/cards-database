import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Léopardus",
		de: "Kleoparda",
		es: "Liepard",
		pt: "Liepard",
		it: "Liepard",
		en: "Liepard"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Chacripan",
		de: "Felilou",
		es: "Purrloin",
		pt: "Purrloin",
		it: "Purrloin",
		en: "Purrloin"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Troc",
			de: "Ersetzen",
			es: "Intercambiar",
			pt: "Troca",
			it: "Contraccambio",
			en: "Trade"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			pt: "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			pt: "Talho",
			it: "Lacerazione",
			en: "Slash"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon."
	}
}

export default card