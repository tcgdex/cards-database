import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Carbink",
		fr: "Strassie",
		es: "Carbink",
		it: "Carbink",
		pt: "Carbink",
		de: "Rocara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lucky Find",
			fr: "Trouvaille Inespérée",
			es: "Hallazgo Afortunado",
			it: "Ritrovamento Fortunato",
			pt: "Descoberta Sortuda",
			de: "Glücksfund"
		},

		effect: {
			en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Objet, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			es: "Joya de Luz",
			it: "Gemmoforza",
			pt: "Gema Poderosa",
			de: "Juwelenkraft"
		},

		damage: 80
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