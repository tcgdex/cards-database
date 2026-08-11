import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Backtrack Badge",
		'fr-fr': "Badge Rebelote",
		'es-es': "Insignia Reintento",
		'es-mx': "Insignia Retroactiva",
		'de-de': "Retourorden",
		'it-it': "Distintivo di Rettifica",
		'pt-br': "Distintivo de Recomeço"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		'en-us': "Once during your turn, after you flip any coins for an attack of the {C} Pokémon this card is attached to, you may ignore all results of those coin flips and begin flipping those coins again.",
		'fr-fr': "Une fois pendant votre tour, après avoir lancé au moins une pièce pour une attaque du Pokémon {C} auquel cette carte est attachée, vous pouvez ignorer le résultat de ces lancers de pièce et lancer ces pièces à nouveau.",
		'es-es': "Una vez durante tu turno, después de lanzar las monedas para un ataque del Pokémon {C} al que esté unida esta carta, puedes ignorar todos los resultados de esos lanzamientos y lanzar esas monedas de nuevo.",
		'es-mx': "Una vez durante tu turno, después de lanzar 1 o más monedas por un ataque del Pokémon {C} al que esté unida esta carta, puedes ignorar todos los resultados de esos lanzamientos y lanzar esas monedas de nuevo.",
		'de-de': "Einmal während deines Zuges, nachdem du mindestens 1 Münze für eine Attacke des {C}-Pokémon, an das diese Karte angelegt ist, geworfen hast, kannst du alle Ergebnisse jener Münzwürfe ignorieren und jene Münzen erneut werfen.",
		'it-it': "Una sola volta durante il tuo turno, dopo aver lanciato la moneta tutte le volte richieste da un attacco del Pokémon {C} a cui è assegnata questa carta, puoi ignorare tutti i risultati di quei lanci e lanciare nuovamente la moneta lo stesso numero di volte.",
		'pt-br': "Uma vez durante o seu turno, após jogar moedas para um ataque do Pokémon {C} ao qual esta carta está ligada, você poderá ignorar todos os resultados das moedas e jogá-las novamente."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
	],
}

export default card
