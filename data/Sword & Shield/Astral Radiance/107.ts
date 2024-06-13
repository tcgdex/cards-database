import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Giga Magnet",
			fr: "Giga Aimant",
			es: "Gigaimán",
			it: "Gigamagnete",
			pt: "Giga-imã",
			de: "Gigamagnet"
		},

		effect: {
			en: "Once during your turn, you may look at the top 6 cards of your deck and attach any number of Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie Metal que vous y trouvez à vos Pokémon comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			es: "Una vez durante tu turno, puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Metal que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime sei carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia Metal presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, você pode olhar as 6 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia Metal que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
			de: "Einmal während deines Zuges kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele Metal-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Power Beam",
			fr: "Puissant Rayon",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Raio de Poder",
			de: "Power-Strahl"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
