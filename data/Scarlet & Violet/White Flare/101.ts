import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Litwick",
		fr: "Funécire",
		de: "Lichtel",
		it: "Litwick",
		pt: "Litwick",
		es: "Litwick",
		'es-mx': "Litwick"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Brighten and Burn",
			fr: "Brille et Brûle",
			de: "Erleuchten und Verbrennen",
			it: "Illumina e Brucia",
			pt: "Clarear e Queimar",
			es: "Iluminar y Quemar",
			'es-mx': "Iluminar y Quemar"
		},

		effect: {
			en: "Look at the top card of your deck. You may discard that card.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			it: "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta.",
			pt: "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			es: "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			'es-mx': "Mira la primera carta de tu mazo. Puedes descartar esa carta."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835931
	}
}

export default card