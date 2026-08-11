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
	types: ["Fire"],

	description: {
		'en-us': "This form of Oricorio has sipped red nectar. It whips up blazing flames as it moves to the steps of its passionate dance.",
		'fr-fr': "Cette forme est celle qui se nourrit de\nNectar Rouge. Ses pas de danse fougueux\ns'accompagnent souvent de torrents de flammes.",
		'es-es': "Forma que toma Oricorio al libar Néctar Rojo.\nSus pasos de baile cargados de pasión suelen ir\nacompañados de violentas llamaradas.",
		'it-it': "Forma assunta da un Oricorio che si è nutrito\ndi Nettare rosso. Con i suoi ardenti passi di\ndanza crea impetuosi turbini fiammeggianti.",
		'de-de': "Dieses Choreogel hat Roten Nektar geschlürft.\nMit seinen feurigen Tanzschritten lässt es\nlodernde Flammen aufwirbeln.",
		'pt-br': "Esta forma de Oricorio bebericou néctar vermelho.\nCria labaredas flamejantes enquanto se move aos passos\nde sua dança fervorosa.",
		'ko-kr': "다홍꿀을 빨아들인 모습.\n정열적인 스텝을 밟으며\n격렬한 불꽃을 일으킨다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Kindle",
			'fr-fr': "Enflammer",
			'es-es': "Encendido",
			'it-it': "Infiammare",
			'de-de': "Anzünden",
			'pt-br': "Inflamar",
			'ko-kr': "활활"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Discard a random Energy from both Active Pokémon.",
			'fr-fr': "Défaussez une Énergie au hasard des deux Pokémon Actifs.",
			'es-es': "Descarta 1 Energía aleatoria de ambos Pokémon Activos.",
			'it-it': "Rimuovi un'Energia a caso da entrambi i Pokémon attivi.",
			'de-de': "Lege 1 zufällige Energie von beiden Aktiven Pokémon ab.",
			'pt-br': "Descarte 1 Energia aleatória de ambos os Pokémon Ativos.",
			'ko-kr': "서로의 배틀 포켓몬에서 에너지를 랜덤으로 1개씩 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card