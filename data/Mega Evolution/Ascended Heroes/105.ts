import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		'es-mx': "Lunatone",
		de: "Lunastein",
		it: "Lunatone",
		pt: "Lunatone"
	},

	illustrator: "Whisker",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [337],

	abilities: [{
		type: "Ability",

		name: {
			en: "Lunar Cycle",
			fr: "Cycle Lunaire",
			es: "Ciclo Lunar",
			'es-mx': "Lunación",
			de: "Lunarphase",
			it: "Ciclo Lunare",
			pt: "Ciclo Lunar"
		},

		effect: {
			en: "Once during your turn, if you have Solrock in play, you may discard a Basic {F} Energy card from your hand in order to use this Ability. Draw 3 cards. You can't use more than 1 Lunar Cycle Ability each turn.",
			fr: "Une fois pendant votre tour, si vous avez Solaroc en jeu, vous pouvez défausser une carte Énergie {F} de base de votre main pour utiliser ce talent. Piochez 3 cartes. Vous ne pouvez utiliser qu'un talent Cycle Lunaire par tour.",
			es: "Una vez durante tu turno, si tienes a Solrock en juego, puedes descartar 1 carta de Energía {F} Básica de tu mano para poder usar esta habilidad. Roba 3 cartas. No puedes usar más de una habilidad Ciclo Lunar en cada turno.",
			'es-mx': "Una vez durante tu turno, si tienes Solrock en juego, puedes descartar 1 carta de Energía {F} Básica de tu mano para usar esta Habilidad. Roba 3 cartas. No puedes usar más de 1 Habilidad Lunación en cada turno.",
			de: "Einmal während deines Zuges, wenn du Sonnfel im Spiel hast, kannst du 1 Basis-{F}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Ziehe 3 Karten. Du kannst die Fähigkeit Lunarphase nur einmal pro Zug einsetzen.",
			it: "Una sola volta durante il tuo turno, se hai Solrock in gioco, puoi scartare una carta Energia base {F} che hai in mano per usare questa abilità. Pesca tre carte. Non puoi usare più di un'abilità Ciclo Lunare per turno.",
			pt: "Uma vez durante o seu turno, se você tiver Solrock em jogo, você poderá descartar uma carta de Energia {F} Básica da sua mão para usar esta Habilidade. Compre 3 cartas. Você não pode usar mais de 1 Habilidade Ciclo Lunar por turno."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			es: "Joya de Luz",
			'es-mx': "Joya de Luz",
			de: "Juwelenkraft",
			it: "Gemmoforza",
			pt: "Gema Poderosa"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675917,
		cardmarket: 869716
	}
}

export default card