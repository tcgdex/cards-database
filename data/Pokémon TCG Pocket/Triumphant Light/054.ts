import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

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

	illustrator: "Souichirou Gunjima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

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
			en: "Rolling Attack",
			fr: "Attaque Qui Roule",
			es: "Ataque Giro",
			it: "Attacco Rotolante",
			de: "Rollender Angriff",
			'pt-br': "Golpe Rolador",
			ko: "볼어택"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
