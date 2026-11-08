import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Giga Magnet",
			'fr-fr': "Giga Aimant",
			'es-es': "Gigaimán",
			'it-it': "Gigamagnete",
			'pt-br': "Giga-imã",
			'de-de': "Gigamagnet"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top 6 cards of your deck and attach any number of Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie Metal que vous y trouvez à vos Pokémon comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Metal que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime sei carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia Metal presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você pode olhar as 6 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia Metal que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele Metal-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Beam",
			'fr-fr': "Puissant Rayon",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'pt-br': "Raio de Poder",
			'de-de': "Power-Strahl"
		},

		damage: 120
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
	regulationMark: "F",


	description: {
		'en-us': "Some say that Magnezone receives signals from space via the antenna on its head and that it's being controlled by some mysterious being.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691897,
				tcgplayer: 478036
			}
		},
	],
}

export default card
