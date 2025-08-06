import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Melmetal V",
		de: "Melmetal V",
		es: "Melmetal V",
		pt: "Melmetal V",
		it: "Melmetal V",
		en: "Melmetal V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			fr: "Bras Chargeur",
			de: "Armaufladung",
			es: "Carga Brazo",
			pt: "Carga de Braço",
			it: "Bracciocarica",
			en: "Arm Charge"
		},

		effect: {
			fr: "Vous pouvez attacher une carte Énergie {M} de votre main à ce Pokémon.",
			de: "Du kannst 1 {M}-Energiekarte aus deiner Hand an dieses Pokémon anlegen.",
			es: "Puedes unir 1 carta de Energía {M} de tu mano a este Pokémon.",
			pt: "Você pode ligar 1 carta de Energia {M} da sua mão a este Pokémon.",
			it: "Puoi assegnare a questo Pokémon una carta Energia {M} dalla tua mano.",
			en: "You may attach a {M} Energy card from your hand to this Pokémon."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			fr: "Ultimapoing",
			de: "Megahieb",
			es: "Megapuño",
			pt: "Megassoco",
			it: "Megapugno",
			en: "Mega Punch"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 653692
	}
}

export default card