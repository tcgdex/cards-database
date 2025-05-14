import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

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

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu"
	},

	description: {
		en: "Its tail discharges electricity into the ground, protecting it from getting shocked.",
		fr: "Il se protège des décharges grâce à sa queue,\nqui dissipe l'électricité dans le sol.",
		es: "Su cola actúa como toma de tierra\ny descarga electricidad al suelo, lo\nque le protege de los calambrazos.",
		it: "La sua coda scarica elettricità a terra,\nproteggendolo dalle scosse elettriche.",
		de: "Mithilfe seines Schweifs entlädt es Elektrizität\nin den Boden, um sich auf diese Weise vor\nelektrischen Schlägen zu schützen.",
		'pt-br': "Sua cauda descarrega a eletricidade\nno solo, protegendo-o contra choques.",
		ko: "꼬리가 어스 역할을 하여\n전기를 지면으로 흘려보내므로\n자신은 감전되거나 하지 않는다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gigashock",
			fr: "Electrochok",
			es: "Gigasacudida",
			it: "Superscossa",
			de: "Gigaschock",
			'pt-br': "Gigachoque",
			ko: "기가스파크"
		},

		damage: 60,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
