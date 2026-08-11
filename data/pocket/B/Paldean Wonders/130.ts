import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'fr-fr': "Glaivodo",
		'en-us': "Baxcalibur",
		'es-es': "Baxcalibur",
		'it-it': "Baxcalibur",
		'pt-br': "Baxcalibur",
		'de-de': "Espinodon"
	},

    illustrator: "PLANETA Igarashi",
    rarity: "Crown",
    category: "Pokemon",

    hp: 170,
    types: ["Water"],
    dexId: [998],

	evolveFrom: {
		'fr-fr': "Cryodo",
		'en-us': "Arctibax",
		'es-es': "Arctibax",
		'it-it': "Arctibax",
		'pt-br': "Arctibax",
		'de-de': "Cryospino"
	},
    stage: "Stage2",

	description: {
		'en-us': "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
	},

	abilities: [
		{
		type: "Ability",
		name: {
			'en-us': "Ice Maker",
		},
		effect: {
			'en-us': "Once during your turn, you may take a Water Energy from your Energy Zone and attach it to the Water Pokémon in the Active Spot.",
		},
		},
	],
	
	attacks: [
		{
		name: {
			'fr-fr': "Queue Destructrice",
			'en-us': "Buster Tail",
			'es-es': "Cola Destructora",
			'it-it': "Coda Distruttrice",
			'pt-br': "Cauda Aniquiladora",
			'de-de': "Zertrümmernder Schweif"
		},
		damage: "90",
		cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [
		{
		type: "Metal",
		value: "+20",
		},
	],

	retreat: 3,
}

export default card