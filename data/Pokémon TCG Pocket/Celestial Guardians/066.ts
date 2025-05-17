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

	illustrator: "Jerky",
	rarity: "Three Diamond",
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
			en: "Safeguard",
			fr: "Rune Protect",
			es: "Velo Sagrado",
			it: "Salvaguardia",
			de: "Bodyguard",
			'pt-br': "Salvaguarda",
			ko: "신비의부적"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-{ex} de votre adversaire.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon {ex} de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-{ex} del tuo avversario.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-{ex} deines Gegners zugefügt wird.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon {ex} do seu oponente.",
			ko: "이 포켓몬은 상대의 「포켓몬 {ex}」로부터 기술의 데미지를 받지 않는다."
		}
	}],

	attacks: [{
		name: {
			en: "Zzzap",
			fr: "Zzzap",
			es: "Zumbar",
			it: "Zzzap",
			de: "Zzzapp!",
			'pt-br': "Zzzap",
			ko: "톡톡"
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