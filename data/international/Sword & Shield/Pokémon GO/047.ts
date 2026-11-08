import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal V",
		'fr-fr': "Melmetal V",
		'es-es': "Melmetal V",
		'it-it': "Melmetal V",
		'pt-br': "Melmetal V",
		'de-de': "Melmetal V"
	},

	illustrator: "sadaji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Arm Charge",
			'fr-fr': "Bras Chargeur",
			'es-es': "Carga Brazo",
			'it-it': "Bracciocarica",
			'pt-br': "Carga de Braço",
			'de-de': "Armaufladung"
		},

		effect: {
			'en-us': "You may attach a Metal Energy card from your hand to this Pokémon.",
			'fr-fr': "Vous pouvez attacher une carte Énergie Metal de votre main à ce Pokémon.",
			'es-es': "Puedes unir 1 carta de Energía Metal de tu mano a este Pokémon.",
			'it-it': "Puoi assegnare a questo Pokémon una carta Energia Metal dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia Metal da sua mão a este Pokémon.",
			'de-de': "Du kannst 1 Metal-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665270,
				tcgplayer: 277019
			}
		},
	],
}

export default card
