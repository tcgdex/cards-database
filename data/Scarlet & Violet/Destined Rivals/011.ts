import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
		de: "Mähikel",
		it: "Skiddo",
		es: "Skiddo",
		pt: "Skiddo"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			de: "Rankenhieb",
			it: "Frustata",
			es: "Látigo Cepa",
			pt: "Chicote de Vinha"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			es: "Patada Destrucción",
			pt: "Chute Poderoso"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card