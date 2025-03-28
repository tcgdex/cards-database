import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Breezy Gift",
			fr: "Cadeau Zéphyr",
			es: "Regalo Brisa",
			it: "Donobrezza",
			pt: "Presente das Brisas",
			de: "Luftiges Geschenk"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your deck. If you do, search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Placez dans votre deck ce Pokémon et toutes les cartes qui lui sont attachées. Dans ce cas, cherchez dans votre deck jusqu'à 3 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja. Si lo haces, busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Metti questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se lo fai, cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele no seu baralho. Se fizer isto, procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Lege dieses Pokémon und alle angelegten Karten in dein Deck. Wenn du das machst, durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
