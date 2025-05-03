import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Maker",
			fr: "Création de Métal",
			es: "Creametal",
			it: "Fabbricametallo",
			pt: "Fabricante de Metal",
			de: "Metallmacher"
		},

		effect: {
			en: "Once during your turn, you may look at the top 4 cards of your deck and attach any number of Basic Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 4 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie Metal de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes et placez-les en dessous de votre deck.",
			es: "Una vez durante tu turno, puedes mirar las 4 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Metal Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Baraja el resto de las cartas y ponlas en la parte inferior de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime quattro carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia base Metal presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte e mettile in fondo al tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 4 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia Metal Básica que encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas e coloque-as como as cartas de baixo do seu baralho.",
			de: "Einmal während deines Zuges kannst du dir die obersten 4 Karten deines Decks anschauen und beliebig viele Basis-Metal-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten und lege sie unter dein Deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card