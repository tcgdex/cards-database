import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Kirlia",
		de: "Kirlia",
		es: "Kirlia",
		pt: "Kirlia",
		it: "Kirlia",
		en: "Kirlia"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Tarsal",
		de: "Trasla",
		es: "Ralts",
		pt: "Ralts",
		it: "Ralts",
		en: "Ralts"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Raffinement",
			de: "Finesse",
			es: "Refinamiento",
			pt: "Requinte",
			it: "Raffinatezza",
			en: "Refinement"
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
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Gifle",
			de: "Hieb",
			es: "Bofetón",
			pt: "Tapa",
			it: "Sberla",
			en: "Slap"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about."
	},

	thirdParty: {
		cardmarket: 681800
	}
}

export default card