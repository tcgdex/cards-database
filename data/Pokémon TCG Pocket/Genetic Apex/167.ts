import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		de: "Nidorina",
		'pt-br': "Nidorina",
		ko: "니드리나"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Nidoran♀"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The horn on its head has atrophied. It's thought that this happens so Nidorina's children won't get poked while their mother is feeding them.",
		fr: "On pense que sa corne frontale s'est atrophiée pour\nlui permettre de nourrir ses petits sans les blesser.",
		es: "Se cree que el cuerno de la frente se le ha atrofiado\npara evitar herir a sus crías al alimentarlas.",
		it: "Si pensa che il corno sulla fronte si sia\natrofizzato per evitare che Nidorina\npunga i suoi cuccioli quando li nutre.",
		de: "Man geht davon aus, dass sich das Horn auf\nihrem Kopf zurückgebildet hat, damit sie ihre\nJungen nicht beim Füttern verletzen.",
		'pt-br': "O chifre em sua cabeça atrofiou. Acredita-se que\nisso aconteceu para que os filhotes de Nidorina\nnão fossem espetados enquanto a mãe os alimenta.",
		ko: "이마의 뿔은 새끼에게 먹이를\n줄 때 찌르지 않도록\n퇴화했다고 추측되고 있다."
	},

	boosters: ["pikachu"]
}

export default card
