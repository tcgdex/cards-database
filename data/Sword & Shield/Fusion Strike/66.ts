import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [367],
	set: Set,

	name: {
		en: "Huntail",
		fr: "Serpang",
		es: "Huntail",
		it: "Huntail",
		pt: "Huntail",
		de: "Aalabyss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "otumami",

	description: {
		en: "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Single Strike Jammer",
			fr: "Bloqueur de Poing Final",
			es: "Inhibidor de Golpe Brusco",
			it: "Blocco Colpo Singolo",
			de: "Fokussierter-Angriff-Störer",
			pt: "Bloqueador Golpe Decisivo"
		},

		effect: {
			en: "Your opponent's Single Strike Pokémon's attacks cost {C} more.",
			fr: "Les attaques des Pokémon Poing Final de votre adversaire coûtent {C} de plus.",
			es: "Los ataques de los Pokémon Golpe Brusco de tu rival cuestan {C} más.",
			it: "Il costo degli attacchi dei Pokémon Colpo Singolo del tuo avversario aumenta di {C}.",
			de: "Die Kosten der Attacken der Fokussierter-Angriff-Pokémon deines Gegners erhöhen sich um {C}.",
			pt: "Os ataques dos Pokémon Golpe Decisivo do seu oponente custam {C} a mais."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Cavernous Chomp",
			fr: "Mâchoire Caverneuse",
			es: "Mordisco Cavernoso",
			it: "Mandibola Cavernosa",
			de: "Riesiger Biss",
			pt: "Mastigada Cavernosa"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card