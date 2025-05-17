import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		de: "Rattikarl",
		'pt-br': "Raticate",
		ko: "레트라"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Rattata"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.",
		fr: "Les petites palmes de ses pattes postérieures\nlui permettraient de se rendre d'île en île\nà la nage afin d'échapper à ses prédateurs.",
		es: "Las pequeñas membranas que tiene en las\npatas traseras le permiten nadar entre las islas\nde Alola y escapar así de sus depredadores.",
		it: "Si dice che sia sfuggito ai nemici nuotando\nda un'isola all'altra grazie alle minuscole\nmembrane tra le dita delle zampe posteriori.",
		de: "Auf der Flucht vor seinen Feinden nutzt es die\nSchwimmhäute an seinen Hinterläufen, um von\nInsel zu Insel zu schwimmen.",
		'pt-br': "Dizem que fugiu dos seus inimigos\nusando seus pés palmados para nadar\nde ilha em ilha em Alola.",
		ko: "뒷발의 작은 물갈퀴로\n바다를 헤엄쳐 섬을 건너\n적을 피해 도망쳤다고 한다."
	}
}

export default card
