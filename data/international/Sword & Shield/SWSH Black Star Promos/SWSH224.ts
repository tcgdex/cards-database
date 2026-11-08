import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'fr-fr': "Melmetal V",
		'de-de': "Melmetal V",
		'es-es': "Melmetal V",
		'pt-br': "Melmetal V",
		'it-it': "Melmetal V",
		'en-us': "Melmetal V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'fr-fr': "Bras Chargeur",
			'de-de': "Armaufladung",
			'es-es': "Carga Brazo",
			'pt-br': "Carga de Braço",
			'it-it': "Bracciocarica",
			'en-us': "Arm Charge"
		},

		effect: {
			'fr-fr': "Vous pouvez attacher une carte Énergie {M} de votre main à ce Pokémon.",
			'de-de': "Du kannst 1 {M}-Energiekarte aus deiner Hand an dieses Pokémon anlegen.",
			'es-es': "Puedes unir 1 carta de Energía {M} de tu mano a este Pokémon.",
			'pt-br': "Você pode ligar 1 carta de Energia {M} da sua mão a este Pokémon.",
			'it-it': "Puoi assegnare a questo Pokémon una carta Energia {M} dalla tua mano.",
			'en-us': "You may attach a {M} Energy card from your hand to this Pokémon."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'fr-fr': "Ultimapoing",
			'de-de': "Megahieb",
			'es-es': "Megapuño",
			'pt-br': "Megassoco",
			'it-it': "Megapugno",
			'en-us': "Mega Punch"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 653692
	}
}

export default card
