import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call Sign",
			fr: "Signe d'Appel",
			es: "Señal de Llamada",
			it: "Chiamata",
			pt: "Sinal de Chamada",
			de: "Rufzeichen"
		},

		effect: {
			en: "Search your deck for a Lightning Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon Lightning, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon Lightning, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Lightning, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 Pokémon Lightning no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Lightning-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina",
			de: "Mini-Stromstoß"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card