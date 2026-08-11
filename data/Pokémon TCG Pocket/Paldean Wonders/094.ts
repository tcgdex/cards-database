import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

    illustrator: "Shimaris Yukichi",
    rarity: "One Star",
    category: "Pokemon",

    hp: 70,
    types: ["Fire"],
    dexId: [909],

    description: {
        en: "Its flame sac is small, so energy is always leaking out. This energy is released from the dent atop Fuecoco's head and flickers to and fro.",
    },

    stage: "Basic",

    attacks: [{
        name: {
            en: "Cheerful Singing",
        },

        cost: ["Colorless"],

		effect: {
			en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
			fr: "Placez un Pokémon de base au hasard de votre deck sur votre Banc.",
			es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu Banca.",
			it: "Prendi un Pokémon Base a caso dal tuo mazzo e mettilo nella tua panchina.",
			de: "Lege 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Bank.",
			'pt-br': "Coloque 1 Pokémon Básico aleatório do seu baralho no seu Banco.",
			ko: "자신의 덱에서 기본 포켓몬eul_reul 랜덤으로 1장 벤치로 내보낸다."
		}
    }],

    weaknesses: [
        {
        type: "Water",
        value: "+20",
        },
    ],

    retreat: 2,
}

export default card