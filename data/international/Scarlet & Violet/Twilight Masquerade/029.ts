import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		'en-us': "Magcargo ex",
		'fr-fr': "Volcaropod-ex",
		'es-es': "Magcargo ex",
		'it-it': "Magcargo-ex",
		'pt-br': "Magcargo ex",
		'de-de': "Magcargo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Hot Magma",
			'fr-fr': "Magma Ardent",
			'es-es': "Magma Caliente",
			'it-it': "Magma Bollente",
			'pt-br': "Magma Cálido",
			'de-de': "Heißes Magma"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 70
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Ground Burn",
			'fr-fr': "Brûlure au Sol",
			'es-es': "Quemar Suelo",
			'it-it': "Bruciaterra",
			'pt-br': "Queimar o Solo",
			'de-de': "Bodenbrand"
		},

		effect: {
			'en-us': "Discard the top card of each player's deck. This attack does 140 more damage for each Energy card discarded in this way.",
			'fr-fr': "Défaussez la carte du dessus du deck de chaque joueur. Cette attaque inflige 140 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			'es-es': "Descarta la primera carta de la baraja de cada jugador. Este ataque hace 140 puntos de daño más por cada carta de Energía descartada de esta manera.",
			'it-it': "Scarta la prima carta del mazzo di ciascun giocatore. Questo attacco infligge 140 danni in più per ogni carta Energia scartata in questo modo.",
			'pt-br': "Descarte a carta de cima do baralho de cada jogador. Este ataque causa 140 pontos de dano a mais para cada carta de Energia descartada desta forma.",
			'de-de': "Lege die oberste Karte des Decks jedes Spielers auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 140 Schadenspunkte mehr zu."
		},

		damage: "140+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769203,
				tcgplayer: 550073
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

}

export default card