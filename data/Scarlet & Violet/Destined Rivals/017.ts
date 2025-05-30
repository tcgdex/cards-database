import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Dipplin",
		fr: "Pomdramour",
		de: "Sirapfel",
		it: "Dipplin",
		es: "Dipplin",
		pt: "Dipplin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Energy Loop",
			fr: "Boucle d'Énergie",
			de: "Energieschleife",
			it: "Circuito Energetico",
			es: "Bucle de Energía",
			pt: "Loop de Energia"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card