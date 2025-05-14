import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		de: "Choreogel",
		'pt-br': "Oricorio",
		ko: "춤추새"
	},

	illustrator: "USGMEN",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "This form of Oricorio has sipped yellow nectar. It uses nimble steps to approach opponents, then knocks them out with electric punches.",
		fr: "Ce Plumeline a bu du Nectar Jaune. Il s'approche\nprestement de ses adversaires en dansant et les\nmet K.O. en leur assénant des coups électriques.",
		es: "Forma que toma Oricorio al libar Néctar Amarillo.\nSe acerca a sus rivales con ágiles pasos de baile y\nlos noquea con puñetazos eléctricos.",
		it: "Forma di un Oricorio che si è nutrito di Nettare\ngiallo. Si avvicina all'avversario con agili passi\ndi danza e lo manda KO con pugni elettrici.",
		de: "Dieses Choreogel hat Gelben Nektar geschlürft.\nLeichten Schrittes nähert es sich Gegnern,\num sie mit Elektrohieben zu besiegen.",
		'pt-br': "Esta forma de Oricorio bebericou néctar amarelo.\nAproxima-se dos seus oponentes com passos ligeiros,\ndepois os nocauteia com socos elétricos.",
		ko: "진노랑꿀을 빨아들인 모습.\n경쾌한 스텝으로 상대에게 접근하여\n전격을 담은 펀치로 KO시킨다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Safeguard"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex."
		}
	}],

	attacks: [{
		name: {
			en: "Zzzap"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card