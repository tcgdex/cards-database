import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		fr: "Carmadura",
		en: "Armarouge",
		es: "Armarouge",
		it: "Armarouge",
		pt: "Armarouge",
		de: "Crimanzo"
	},

    suffix: "EX",
    illustrator: "takuyoa",
    rarity: "Two Star",
    category: "Pokemon",

    hp: 140,
    types: ["Fire"],
    evolveFrom: {
		fr: "Charbambin",
		en: "Charcadet",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},
    dexId: [936],

    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
				en: "Armor",
				fr: "Cuirasse",
				es: "Armadura",
				it: "Corazza",
				pt: "Armadura",
				de: "Rüstung"
			},
            effect: {
                en: "This Pokémon takes –30 damage from attacks.",
            },
        },
    ],

    attacks: [
        {
            name: {
                en: "Armor Cannon",
                fr: "Canon Armure",
                es: "Cañón Armadura",
                it: "Corazza Cannone",
                pt: "Canhão de Armadura",
                de: "Rüstungskanone"
            },
            damage: "120",
            cost: ["Fire", "Colorless", "Colorless"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Scarta un'Energia {R} da questo Pokémon.",
                pt: "Descarte uma Energia {R} deste Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel."
            },
        },
    ],

    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],

    retreat: 2,
}

export default card