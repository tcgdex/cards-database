import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		es: "Mightyena",
		it: "Mightyena",
		de: "Magnayen",
		'pt-br': "Mightyena",
		ko: "그라에나"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Poochyena"
	},

	description: {
		en: "It will always obey the commands of a skilled Trainer. Its behavior arises from its living in packs in ancient times.",
		fr: "Il obéit toujours aux ordres de son Dresseur\nsi celui-ci est très doué. Son comportement\nvient de l'époque reculée où il vivait en meute.",
		es: "Siempre obedece a los buenos Entrenadores.\nEstá acostumbrado a vivir en jaurías en estado salvaje.",
		it: "La sua eccezionale obbedienza verso gli Allenatori\nesperti deriva dall'antica abitudine di vivere in branchi.",
		de: "Es wird stets die Befehle eines begabten Trainers\nbefolgen. Dieses Verhalten geht darauf zurück,\ndass es früher im Rudel lebte.",
		'pt-br': "Sempre obedece aos comandos de um Treinador\nhabilidoso. Seu comportamento é o resultado de viver\nem matilhas eras atrás.",
		ko: "우수한 트레이너의 명령에는\n절대복종한다. 먼 옛날\n무리를 지어 행동했던 영향이다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			de: "Fänge der Dunkelheit",
			'pt-br': "Presa Sombria",
			ko: "어둠엄니"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
