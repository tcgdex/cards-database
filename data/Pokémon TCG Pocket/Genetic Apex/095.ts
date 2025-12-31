import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		de: "Raichu",
		'pt-br': "Raichu",
		ko: "라이츄"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",

	dexId: [26],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			it: "Fulmine",
			de: "Donnerblitz",
			'pt-br': "Relâmpago",
			ko: "10만볼트"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
			de: "Lege alle Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			ko: "이 포켓몬에서 에너지를 모두 트래쉬한다."
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
		en: "Its tail discharges electricity into the ground, protecting it from getting shocked.",
		fr: "Il se protège des décharges grâce à sa queue,\nqui dissipe l'électricité dans le sol.",
		es: "Su cola actúa como toma de tierra\ny descarga electricidad al suelo, lo\nque le protege de los calambrazos.",
		it: "La sua coda scarica elettricità a terra,\nproteggendolo dalle scosse elettriche.",
		de: "Mithilfe seines Schweifs entlädt es Elektrizität\nin den Boden, um sich auf diese Weise vor\nelektrischen Schlägen zu schützen.",
		'pt-br': "Sua cauda descarrega a eletricidade\nno solo, protegendo-o contra choques.",
		ko: "꼬리가 어스 역할을 하여\n전기를 지면으로 흘려보내므로\n자신은 감전되거나 하지 않는다."
	},

	boosters: ["pikachu"]
}

export default card
