import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		en: "Magcargo ex",
		fr: "Volcaropod-ex",
		es: "Magcargo ex",
		it: "Magcargo-ex",
		pt: "Magcargo ex",
		de: "Magcargo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Hot Magma",
			fr: "Magma Ardent",
			es: "Magma Caliente",
			it: "Magma Bollente",
			pt: "Magma Cálido",
			de: "Heißes Magma"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 70
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Ground Burn",
			fr: "Brûlure au Sol",
			es: "Quemar Suelo",
			it: "Bruciaterra",
			pt: "Queimar o Solo",
			de: "Bodenbrand"
		},

		effect: {
			en: "Discard the top card of each player's deck. This attack does 140 more damage for each Energy card discarded in this way.",
			fr: "Défaussez la carte du dessus du deck de chaque joueur. Cette attaque inflige 140 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			es: "Descarta la primera carta de la baraja de cada jugador. Este ataque hace 140 puntos de daño más por cada carta de Energía descartada de esta manera.",
			it: "Scarta la prima carta del mazzo di ciascun giocatore. Questo attacco infligge 140 danni in più per ogni carta Energia scartata in questo modo.",
			pt: "Descarte a carta de cima do baralho de cada jogador. Este ataque causa 140 pontos de dano a mais para cada carta de Energia descartada desta forma.",
			de: "Lege die oberste Karte des Decks jedes Spielers auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 140 Schadenspunkte mehr zu."
		},

		damage: "140+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Mochizuki"
}

export default card