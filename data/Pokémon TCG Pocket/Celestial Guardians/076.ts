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
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This form of Oricorio has sipped pink nectar. It elevates its mind with the gentle steps of its dance, then unleashes its psychic energy.",
		fr: "Ce Plumeline a bu du Nectar Rose.\nIl se concentre en effectuant de légers pas\nde danse, puis il libère son énergie psychique.",
		es: "Forma que toma Oricorio al libar Néctar Rosa.\nEmplea la energía psíquica que obtiene al\ncentrar su mente con delicados pasos de baile.",
		it: "Forma di un Oricorio che si è nutrito di Nettare\nrosa. Aumenta le sue energie mentali con placidi\npassi di danza e poi scatena i suoi poteri psichici.",
		de: "Dieses Choreogel hat Rosa Nektar geschlürft.\nMit eleganten Tanzschritten erhöht es seine\nPsycho-Kräfte, ehe es diese freisetzt.",
		'pt-br': "Esta forma de Oricorio bebericou néctar rosa.\nEleva a mente com os passos suaves da sua dança\ne depois libera energia psíquica.",
		ko: "연분홍꿀을 빨아들인 모습.\n사뿐한 스텝으로 정신력을 높여서\n사이코 파워를 방출한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
			es: "Danza Deslumbrante",
			it: "Accecadanza",
			de: "Verwirrender Tanz",
			'pt-br': "Dança Fascinante",
			ko: "미혹댄스"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confused.",
			it: "Il Pokémon attivo del tuo avversario viene Confused.",
			de: "Das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"ist jetzt {}\" v1=\"{} jetzt\" ].",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confused.",
			ko: "상대의 배틀 포켓몬을 Confused[Gr:Patchim v=\"으로/로\" ] 만든다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card