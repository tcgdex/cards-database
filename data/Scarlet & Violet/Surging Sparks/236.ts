import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		en: "Durant ex",
		fr: "Fermite-ex",
		es: "Durant ex",
		it: "Durant-ex",
		pt: "Durant ex",
		de: "Fermicula-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sudden Shearing",
			fr: "Tonte Soudaine",
			es: "Descarte Súbito",
			it: "Taglio Improvviso",
			pt: "Corte Súbito",
			de: "Abruptes Abscheren"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top card of your opponent's deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser la carte du dessus du deck de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar la primera carta de la baraja de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare la prima carta del mazzo del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar a carta de cima do baralho do seu oponente.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du die oberste Karte des Decks deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Vengeful Crush",
			fr: "Broyage Vengeur",
			es: "Destrucción Vengativa",
			it: "Distruzione Vendicativa",
			pt: "Esmagamento Vingativo",
			de: "Rächender Zermalmer"
		},

		effect: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "osare",

	thirdParty: {
		cardmarket: 794609
	}
}

export default card
