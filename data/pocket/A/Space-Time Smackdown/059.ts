import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'de-de': "Luxio",
		'pt-br': "Luxio",
		'ko-kr': "럭시오"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx"
	},

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
		'fr-fr': "Le courant qui circule à la pointe de ses griffes\naiguisées est tellement puissant que ses ennemis\nperdent connaissance au moindre effleurement.",
		'es-es': "Por las puntas de sus garras pasa una fuerte corriente\neléctrica. El mínimo roce debilita al enemigo.",
		'it-it': "Dalla punta degli artigli affilati rilascia\nuna corrente elettrica così intensa che\ngli basta sfiorare i nemici per metterli KO.",
		'de-de': "Durch die Spitzen seiner scharfen Krallen strömt Elektrizität.\nSelbst kleine Kratzer verursachen Ohnmacht.",
		'pt-br': "Uma poderosa eletricidade flui pelas pontas\nde suas garras afiadas. Um pequeno arranhão\né suficiente para causar desmaios nos inimigos.",
		'ko-kr': "날카로운 발톱의 끝에는\n강한 전기가 흐르고 있어서\n살짝 스치는 것만으로 상대를 기절시킨다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electric Claws",
			'fr-fr': "Griffes Électriques",
			'es-es': "Garras Eléctricas",
			'it-it': "Artigli Elettrici",
			'de-de': "Elektrokrallen",
			'pt-br': "Garras Elétricas",
			'ko-kr': "전기발톱"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
