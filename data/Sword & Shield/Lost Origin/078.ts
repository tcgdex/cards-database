import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Synchro Kinesis",
			fr: "Synchro-Kinésie",
			es: "Sincroquinesis",
			it: "Sincrocinesi",
			pt: "Cinese Sincronizada",
			de: "Synchronkinese"
		},

		effect: {
			en: "Each player reveals their hand. If a card in your opponent's hand has the same name as a card in your hand, this attack does 90 more damage.",
			fr: "Chaque joueur montre sa main. Si une carte dans la main de votre adversaire a le même nom qu'une carte dans votre main, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Cada jugador enseña las cartas de su mano. Si una carta de la mano de tu rival tiene el mismo nombre que una carta de tu mano, este ataque hace 90 puntos de daño más.",
			it: "Ciascun giocatore mostra le carte che ha in mano. Se una carta nella mano del tuo avversario ha lo stesso nome di una carta che hai in mano, questo attacco infligge 90 danni in più.",
			pt: "Cada jogador revela a própria mão. Se uma carta na mão do oponente tiver o mesmo nome que uma carta na sua mão, este ataque causará 90 pontos de dano a mais.",
			de: "Jeder Spieler zeigt seine Handkarten. Wenn eine Karte auf der Hand deines Gegners denselben Namen wie eine Karte auf deiner Hand hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674091,
		tcgplayer: 283959
	}
}

export default card