import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		en: "Melmetal V",
		fr: "Melmetal V",
		es: "Melmetal V",
		it: "Melmetal V",
		pt: "Melmetal V",
		de: "Melmetal V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Arm Charge",
			fr: "Bras Chargeur",
			es: "Carga Brazo",
			it: "Bracciocarica",
			pt: "Carga de Braço",
			de: "Armaufladung"
		},

		effect: {
			en: "You may attach a Metal Energy card from your hand to this Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Metal de votre main à ce Pokémon.",
			es: "Puedes unir 1 carta de Energía Metal de tu mano a este Pokémon.",
			it: "Puoi assegnare a questo Pokémon una carta Energia Metal dalla tua mano.",
			pt: "Você pode ligar 1 carta de Energia Metal da sua mão a este Pokémon.",
			de: "Du kannst 1 Metal-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Megassoco",
			de: "Megahieb"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
