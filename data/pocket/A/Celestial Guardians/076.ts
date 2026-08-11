import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'de-de': "Choreogel",
		'pt-br': "Oricorio",
		'ko-kr': "춤추새"
	},

	illustrator: "Jerky",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [741],
	hp: 70,
	types: ["Psychic"],

	description: {
		'en-us': "This form of Oricorio has sipped pink nectar. It elevates its mind with the gentle steps of its dance, then unleashes its psychic energy.",
		'fr-fr': "Ce Plumeline a bu du Nectar Rose.\nIl se concentre en effectuant de légers pas\nde danse, puis il libère son énergie psychique.",
		'es-es': "Forma que toma Oricorio al libar Néctar Rosa.\nEmplea la energía psíquica que obtiene al\ncentrar su mente con delicados pasos de baile.",
		'it-it': "Forma di un Oricorio che si è nutrito di Nettare\nrosa. Aumenta le sue energie mentali con placidi\npassi di danza e poi scatena i suoi poteri psichici.",
		'de-de': "Dieses Choreogel hat Rosa Nektar geschlürft.\nMit eleganten Tanzschritten erhöht es seine\nPsycho-Kräfte, ehe es diese freisetzt.",
		'pt-br': "Esta forma de Oricorio bebericou néctar rosa.\nEleva a mente com os passos suaves da sua dança\ne depois libera energia psíquica.",
		'ko-kr': "연분홍꿀을 빨아들인 모습.\n사뿐한 스텝으로 정신력을 높여서\n사이코 파워를 방출한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dazzle Dance",
			'fr-fr': "Danse Éblouissante",
			'es-es': "Danza Deslumbrante",
			'it-it': "Accecadanza",
			'de-de': "Verwirrender Tanz",
			'pt-br': "Dança Fascinante",
			'ko-kr': "미혹댄스"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card