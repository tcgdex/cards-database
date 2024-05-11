import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl",
		fr: "Noarfang",
		es: "Noctowl",
		it: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Talon Hunt",
			fr: "Serres Chasseuses",
			es: "Garra Cazadora",
			it: "Artiglio Cacciatore",
			pt: "Grifas de Caça",
			de: "Klauenjagd"
		},

		effect: {
			en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card