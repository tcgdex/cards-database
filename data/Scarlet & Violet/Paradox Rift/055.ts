import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		pt: "Dondozo",
		de: "Heerashai"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Supplemental Swallow-Up",
			fr: "Engloutissement en Plus",
			es: "Engullir Más",
			it: "Nutringhiottimento",
			pt: "Engolida Suplementar",
			de: "Zusätzliches Runterschlucken"
		},

		effect: {
			en: "Look at the top 5 cards of your deck. You may attach any number of Basic Energy cards you find there to this Pokémon. Shuffle the other cards back into your deck.",
			fr: "Regardez les 5 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie de base que vous y trouvez à ce Pokémon. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 5 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a este Pokémon. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime cinque carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia base presenti tra esse a questo Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 5 cartas de cima do seu baralho. Você poderá ligar qualquer número de cartas de Energia Básica que encontrar lá a este Pokémon. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Schau dir die obersten 5 Karten deines Decks an. Du kannst beliebig viele Basis-Energiekarten, die du dort findest, an dieses Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou"
}

export default card