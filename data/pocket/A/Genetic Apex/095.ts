import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'de-de': "Raichu",
		'pt-br': "Raichu",
		'ko-kr': "라이츄"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",

	dexId: [26],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Pikachu"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'de-de': "Donnerblitz",
			'pt-br': "Relâmpago",
			'ko-kr': "10만볼트"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Rimuovi tutte le Energie assegnate a questo Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'ko-kr': "이 포켓몬에서 에너지를 모두 트래쉬한다."
		},

		damage: "140"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		'en-us': "Its tail discharges electricity into the ground, protecting it from getting shocked.",
		'fr-fr': "Il se protège des décharges grâce à sa queue,\nqui dissipe l'électricité dans le sol.",
		'es-es': "Su cola actúa como toma de tierra\ny descarga electricidad al suelo, lo\nque le protege de los calambrazos.",
		'it-it': "La sua coda scarica elettricità a terra,\nproteggendolo dalle scosse elettriche.",
		'de-de': "Mithilfe seines Schweifs entlädt es Elektrizität\nin den Boden, um sich auf diese Weise vor\nelektrischen Schlägen zu schützen.",
		'pt-br': "Sua cauda descarrega a eletricidade\nno solo, protegendo-o contra choques.",
		'ko-kr': "꼬리가 어스 역할을 하여\n전기를 지면으로 흘려보내므로\n자신은 감전되거나 하지 않는다."
	},

	boosters: ["pikachu"]
}

export default card
