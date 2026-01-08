import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Lunatone",
		fr: "Séléroc",
		de: "Lunastein",
		it: "Lunatone",
		es: "Lunatone",
		pt: "Lunatone",
		'es-mx': "Lunatone"
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
			de: "Lunarphase",
			it: "Ciclo Lunare",
			es: "Ciclo Lunar",
			pt: "Ciclo Lunar",
			'es-mx': "Lunación"
		},

		effect: {
			en: "Once during your turn, if you have Solrock in play, you may discard a Basic {F} Energy card from your hand in order to use this Ability. Draw 3 cards. You can't use more than 1 Lunar Cycle Ability each turn.",
			fr: "Une fois pendant votre tour, si vous avez Solaroc en jeu, vous pouvez défausser une carte Énergie {F} de base de votre main pour utiliser ce talent. Piochez 3 cartes. Vous ne pouvez utiliser qu'un talent Cycle Lunaire par tour.",
			de: "Einmal während deines Zuges, wenn du Sonnfel im Spiel hast, kannst du 1 Basis-{F}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Ziehe 3 Karten. Du kannst die Fähigkeit Lunarphase nur einmal pro Zug einsetzen.",
			it: "Una sola volta durante il tuo turno, se hai Solrock in gioco, puoi scartare una carta Energia base {F} che hai in mano per usare questa abilità. Pesca tre carte. Non puoi usare più di un'abilità Ciclo Lunare per turno.",
			es: "Una vez durante tu turno, si tienes a Solrock en juego, puedes descartar 1 carta de Energía {F} Básica de tu mano para poder usar esta habilidad. Roba 3 cartas. No puedes usar más de una habilidad Ciclo Lunar en cada turno.",
			pt: "Uma vez durante o seu turno, se você tiver Solrock em jogo, você poderá descartar uma carta de Energia {F} Básica da sua mão para usar esta Habilidade. Compre 3 cartas. Você não pode usar mais de 1 Habilidade Ciclo Lunar por turno.",
			'es-mx': "Una vez durante tu turno, si tienes Solrock en juego, puedes descartar 1 carta de Energía {F} Básica de tu mano para usar esta Habilidad. Roba 3 cartas. No puedes usar más de 1 Habilidad Lunación en cada turno."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			de: "Juwelenkraft",
			it: "Gemmoforza",
			es: "Joya de Luz",
			pt: "Gema Poderosa",
			'es-mx': "Joya de Luz"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		}
	],

	thirdParty: {
		tcgplayer: 654413,
		cardmarket: 851145
	}
}

export default card