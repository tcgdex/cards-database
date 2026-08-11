import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant ex",
		'fr-fr': "Fermite-ex",
		'es-es': "Durant ex",
		'it-it': "Durant-ex",
		'pt-br': "Durant ex",
		'de-de': "Fermicula-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sudden Shearing",
			'fr-fr': "Tonte Soudaine",
			'es-es': "Descarte Súbito",
			'it-it': "Taglio Improvviso",
			'pt-br': "Corte Súbito",
			'de-de': "Abruptes Abscheren"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top card of your opponent's deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser la carte du dessus du deck de votre adversaire.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar la primera carta de la baraja de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare la prima carta del mazzo del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar a carta de cima do baralho do seu oponente.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du die oberste Karte des Decks deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Vengeful Crush",
			'fr-fr': "Broyage Vengeur",
			'es-es': "Destrucción Vengativa",
			'it-it': "Distruzione Vendicativa",
			'pt-br': "Esmagamento Vingativo",
			'de-de': "Rächender Zermalmer"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794259,
				tcgplayer: 589928
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	
}

export default card
