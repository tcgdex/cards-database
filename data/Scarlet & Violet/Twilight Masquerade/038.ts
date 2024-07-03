import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Alluring Light",
			fr: "Lumière Envoûtante",
			es: "Luz Seductora",
			it: "Luce Irresistibile",
			pt: "Luz Cativante",
			de: "Verlockendes Licht"
		},

		effect: {
			en: "Once during your turn, you may have each player draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez demander à chaque joueur de piocher une carte.",
			es: "Una vez durante tu turno, puedes hacer que cada jugador robe 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi far pescare una carta a ciascun giocatore.",
			pt: "Uma vez durante o seu turno, você poderá fazer com que cada jogador compre uma carta.",
			de: "Einmal während deines Zuges kannst du jeden Spieler dazu veranlassen, 1 Karte zu ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental",
			es: "Jefe Mental",
			it: "Signore della Mente",
			pt: "Comando Mental",
			de: "Gedankenherrscher"
		},

		effect: {
			en: "This attack does 30 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada carta en la mano de tu rival.",
			it: "Questo attacco infligge 30 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada carta na mão do seu oponente.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card