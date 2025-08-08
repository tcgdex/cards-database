import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		fr: "Magnézone",
		de: "Magnezone",
		es: "Magnezone",
		pt: "Magnezone",
		it: "Magnezone",
		en: "Magnezone"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		fr: "Magnéton",
		de: "Magneton",
		es: "Magneton",
		pt: "Magneton",
		it: "Magneton",
		en: "Magneton"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Giga Aimant",
			de: "Gigamagnet",
			es: "Gigaimán",
			pt: "Giga-imã",
			it: "Gigamagnete",
			en: "Giga Magnet"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie {M} que vous y trouvez à vos Pokémon comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			de: "Einmal während deines Zuges kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele {M}-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck.",
			es: "Una vez durante tu turno, puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía {M} que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			pt: "Uma vez durante o seu turno, você pode olhar as 6 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia {M} que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime sei carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia {M} presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			en: "Once during your turn, you may look at the top 6 cards of your deck and attach any number of {M} Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			fr: "Puissant Rayon",
			de: "Power-Strahl",
			es: "Rayo de Luz Poderoso",
			pt: "Raio de Poder",
			it: "Raggiopotenza",
			en: "Power Beam"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "Some say that Magnezone receives signals from space via the antenna on its head and that it's being controlled by some mysterious being."
	}
}

export default card