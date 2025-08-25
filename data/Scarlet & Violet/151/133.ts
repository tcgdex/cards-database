import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		fr: "Évoli",
		en: "Eevee",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Amis en Couleurs",
			en: "Colorful Friends",
			es: "Amigos Coloridos",
			it: "Amici Colorati",
			pt: "Amigos Multicoloridos",
			de: "Bunte Freunde"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon de types différents, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Pokémon of different types, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Pokémon de diferentes tipos, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon di tipo diverso, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon de tipos diferentes no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon verschiedenen Typs, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Sautiller",
			en: "Skip",
			es: "Saltito",
			it: "Saltello",
			pt: "Saltitar",
			de: "Hüpfer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Narumi Sato",

	thirdParty: {
		cardmarket: 733728
	}
}

export default card