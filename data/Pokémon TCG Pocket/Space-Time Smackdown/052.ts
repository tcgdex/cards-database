import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		de: "Magneton",
		'pt-br': "Magneton",
		ko: "레어코일"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [82],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magnemite"
	},

	description: {
		en: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
		fr: "Le lien magnétique qui rattache ces trois Magnéti est si puissant\nqu'il fait mal aux oreilles si on s'en approche trop.",
		es: "Tres Magnemite se enlazan mediante una\nintensa fuerza magnética. Provoca un fuerte\npitido en los oídos a quien se le acerque.",
		it: "Tre Magnemite sono uniti da una\npotente forza magnetica. Se ci si\navvicina troppo, le orecchie fischiano.",
		de: "Drei Magnetilo sind durch ein starkes\nMagnetfeld verbunden. In seiner Nähe\nbekommt man Ohrensausen.",
		'pt-br': "Três Magnemite estão vinculados por uma força\nmagnética muito poderosa. Se você chegar\nmuito perto, ficará com dor de ouvido.",
		ko: "3개의 코일은 강한 자력으로\n연결되어 있다. 가까이 다가가면\n강한 귀울림에 시달리게 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			de: "Kugelblitz",
			'pt-br': "Bola de Raios",
			ko: "번쩍구슬"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
