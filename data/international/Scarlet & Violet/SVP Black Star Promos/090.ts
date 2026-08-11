import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Maker",
			'fr-fr': "Création de Métal",
			'es-es': "Creametal",
			'it-it': "Fabbricametallo",
			'pt-br': "Fabricante de Metal",
			'de-de': "Metallmacher"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top 4 cards of your deck and attach any number of Basic {M} Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards and put them on the bottom of your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 4 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie {M} de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes et placez-les en dessous de votre deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 4 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía {M} Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Baraja el resto de las cartas y ponlas en la parte inferior de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime quattro carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia base {M} presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte e mettile in fondo al tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar as 4 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia {M} Básica que encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas e coloque-as como as cartas de baixo do seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 4 Karten deines Decks anschauen und beliebig viele Basis-{M}-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten und lege sie unter dein Deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Uta",
	description: {
		'en-us': "Two Beldum have become stuck together via their own magnetic forces. With two brains, the resulting Metang has doubled psychic powers.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 760232,
				tcgplayer: 543951
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761136,
				tcgplayer: 548311
			},
		}
	],
}

export default card
