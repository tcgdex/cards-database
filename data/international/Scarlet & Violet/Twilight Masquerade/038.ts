import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Alluring Light",
			'fr-fr': "Lumière Envoûtante",
			'es-es': "Luz Seductora",
			'it-it': "Luce Irresistibile",
			'pt-br': "Luz Cativante",
			'de-de': "Verlockendes Licht"
		},

		effect: {
			'en-us': "Once during your turn, you may have each player draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez demander à chaque joueur de piocher une carte.",
			'es-es': "Una vez durante tu turno, puedes hacer que cada jugador robe 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi far pescare una carta a ciascun giocatore.",
			'pt-br': "Uma vez durante o seu turno, você poderá fazer com que cada jogador compre uma carta.",
			'de-de': "Einmal während deines Zuges kannst du jeden Spieler dazu veranlassen, 1 Karte zu ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Mind Ruler",
			'fr-fr': "Contrôle Mental",
			'es-es': "Jefe Mental",
			'it-it': "Signore della Mente",
			'pt-br': "Comando Mental",
			'de-de': "Gedankenherrscher"
		},

		effect: {
			'en-us': "This attack does 30 damage for each card in your opponent's hand.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta en la mano de tu rival.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta nella mano del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta na mão do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It absorbs spirits, which it then burns. By waving the flames on its arms, it puts its foes into a hypnotic trance.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769212,
				tcgplayer: 550082
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769212,
				tcgplayer: 550082
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 821715,
			}
		},
	],

	illustrator: "saino misaki",

}

export default card
