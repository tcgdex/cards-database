import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gyarados ex",
		'fr-fr': "Léviator-ex",
		'es-es': "Gyarados ex",
		'it-it': "Gyarados-ex",
		'de-de': "Garados-ex",
		'pt-br': "Gyarados ex",
		'ko-kr': "갸라도스 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [130],
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Rampaging Whirlpool",
			'fr-fr': "Tourbillon Tempétueux",
			'es-es': "Torbellino Furioso",
			'it-it': "Vortice Impetuoso",
			'de-de': "Tosender Strudel",
			'pt-br': "Redemoinho Furioso",
			'ko-kr': "난동 바다회오리"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			'en-us': "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
			'fr-fr': "Défaussez une Énergie au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			'es-es': "Descarta 1 Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
			'it-it': "Rimuovi un'Energia a caso fra quelle assegnate a tutti i Pokémon, sia tuoi che del tuo avversario.",
			'de-de': "Lege 1 zufällige Energie von allen Energien, die an alle Pokémon (deine und die deines Gegners) angelegt sind, ab.",
			'pt-br': "Descarte 1 Energia aleatória dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
			'ko-kr': "서로의 포켓몬 전원에게 붙어 있는 에너지에서 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond"
}

export default card