import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		de: "Luxio",
		'pt-br': "Luxio",
		ko: "럭시오"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx"
	},

	description: {
		en: "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
		fr: "Le courant qui circule à la pointe de ses griffes\naiguisées est tellement puissant que ses ennemis\nperdent connaissance au moindre effleurement.",
		es: "Por las puntas de sus garras pasa una fuerte corriente\neléctrica. El mínimo roce debilita al enemigo.",
		it: "Dalla punta degli artigli affilati rilascia\nuna corrente elettrica così intensa che\ngli basta sfiorare i nemici per metterli KO.",
		de: "Durch die Spitzen seiner scharfen Krallen strömt Elektrizität.\nSelbst kleine Kratzer verursachen Ohnmacht.",
		'pt-br': "Uma poderosa eletricidade flui pelas pontas\nde suas garras afiadas. Um pequeno arranhão\né suficiente para causar desmaios nos inimigos.",
		ko: "날카로운 발톱의 끝에는\n강한 전기가 흐르고 있어서\n살짝 스치는 것만으로 상대를 기절시킨다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Claws",
			fr: "Griffes Électriques",
			es: "Garras Eléctricas",
			it: "Artigli Elettrici",
			de: "Elektrokrallen",
			'pt-br': "Garras Elétricas",
			ko: "전기발톱"
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
