import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		it: "Milcery",
		pt: "Milcery",
		de: "Hokumil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Colorful Confection",
			fr: "Friandise Colorée",
			es: "Dulces de Colores",
			it: "Dolcetti Colorati",
			pt: "Confeitos Coloridos",
			de: "Buntes Konfekt"
		},

		effect: {
			en: "Search your deck for up to 5 Pokémon that are the same type as any Basic Energy attached to this Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 5 Pokémon de mêmes types que les Énergies de base attachées à ce Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 5 Pokémon que sean del mismo tipo que alguna de las Energías Básicas unidas a este Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a cinque Pokémon che sono dello stesso tipo di qualsiasi Energia base assegnata a questo Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 5 Pokémon no seu baralho que sejam do mesmo tipo de qualquer Energia Básica ligada a este Pokémon, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 5 Pokémon, die denselben Typ haben wie eine beliebige an dieses Pokémon angelegte Basis-Energie, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Natsumi Yoshida",

	thirdParty: {
		cardmarket: 785919
	}
}

export default card
