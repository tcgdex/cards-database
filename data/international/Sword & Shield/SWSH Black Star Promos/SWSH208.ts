import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'fr-fr': "Magnézone",
		'de-de': "Magnezone",
		'es-es': "Magnezone",
		'pt-br': "Magnezone",
		'it-it': "Magnezone",
		'en-us': "Magnezone"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Magnéton",
		'de-de': "Magneton",
		'es-es': "Magneton",
		'pt-br': "Magneton",
		'it-it': "Magneton",
		'en-us': "Magneton"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Giga Aimant",
			'de-de': "Gigamagnet",
			'es-es': "Gigaimán",
			'pt-br': "Giga-imã",
			'it-it': "Gigamagnete",
			'en-us': "Giga Magnet"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie {M} que vous y trouvez à vos Pokémon comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele {M}-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía {M} que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'pt-br': "Uma vez durante o seu turno, você pode olhar as 6 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia {M} que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime sei carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia {M} presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			'en-us': "Once during your turn, you may look at the top 6 cards of your deck and attach any number of {M} Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Puissant Rayon",
			'de-de': "Power-Strahl",
			'es-es': "Rayo de Luz Poderoso",
			'pt-br': "Raio de Poder",
			'it-it': "Raggiopotenza",
			'en-us': "Power Beam"
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
		'en-us': "Some say that Magnezone receives signals from space via the antenna on its head and that it's being controlled by some mysterious being."
	},

	thirdParty: {
		cardmarket: 611339
	}
}

export default card
