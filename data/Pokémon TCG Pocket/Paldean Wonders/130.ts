import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		fr: "Glaivodo",
		en: "Baxcalibur",
		es: "Baxcalibur",
		it: "Baxcalibur",
		pt: "Baxcalibur",
		de: "Espinodon"
	},

    illustrator: "PLANETA Igarashi",
    rarity: "Crown",
    category: "Pokemon",

    hp: 170,
    types: ["Water"],
    dexId: [998],

	evolveFrom: {
		fr: "Cryodo",
		en: "Arctibax",
		es: "Arctibax",
		it: "Arctibax",
		pt: "Arctibax",
		de: "Cryospino"
	},
    stage: "Stage2",

	description: {
		en: "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
	},

	abilities: [
		{
		type: "Ability",
		name: {
			en: "Ice Maker",
		},
		effect: {
			en: "Once during your turn, you may take a Water Energy from your Energy Zone and attach it to the Water Pokémon in the Active Spot.",
		},
		},
	],
	
	attacks: [
		{
		name: {
			fr: "Queue Destructrice",
			en: "Buster Tail",
			es: "Cola Destructora",
			it: "Coda Distruttrice",
			pt: "Cauda Aniquiladora",
			de: "Zertrümmernder Schweif"
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