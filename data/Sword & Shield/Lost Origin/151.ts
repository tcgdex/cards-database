import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spill Out",
			fr: "Déversement",
			es: "Desparramar",
			it: "Spargimento",
			pt: "Derrubando Tudo",
			de: "Herauskullern"
		},

		effect: {
			en: "Discard your hand. If you discarded 5 or more cards in this way, this attack does 150 more damage.",
			fr: "Défaussez votre main. Si vous avez défaussé 5 cartes ou plus de cette façon, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Descarta las cartas de tu mano. Si has descartado 5 cartas o más de esta manera, este ataque hace 150 puntos de daño más.",
			it: "Scarta le carte che hai in mano. Se hai scartato cinque o più carte in questo modo, questo attacco infligge 150 danni in più.",
			pt: "Descarte a sua mão. Se você descartou 5 ou mais cartas desta forma, este ataque causará 150 pontos de dano a mais.",
			de: "Lege deine Handkarten auf deinen Ablagestapel. Wenn du auf diese Weise 5 oder mehr Karten auf deinen Ablagestapel gelegt hast, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674160,
		tcgplayer: 284079
	}
}

export default card