import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		en: "Meowscarada",
		fr: "Miascarade",
		es: "Meowscarada",
		it: "Meowscarada",
		de: "Maskagato",
		'pt-br': "Meowscarada",
		ko: "마스카나"
	},

    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 140,
    types: ["Grass"],
    dexId: [908],

    evolveFrom: {
		en: "Floragato",
		fr: "Matourgeon",
		es: "Floragato",
		it: "Floragato",
		de: "Feliospa",
		'pt-br': "Floragato",
		ko: "나로테"
    },
    stage: "Stage2",

    description: {
        en: "This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating.",
    },

    attacks: [
        {
            name: {
                en: "Fighting Claws",
                fr: "Griffes Combatives",
                es: "Garras Luchadoras",
                it: "Lottartigli",
                de: "Kampfkrallen",
                'pt-br': "Garras de Luta",
                ko: "투지의손톱"
            },

            damage: "60+",
            cost: ["Grass", "Grass"],

            effect: {
                en: "If your opponent’s Active Pokémon is a Pokémon {ex}, this attack does 70 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 70 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 70 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 70 pontos de dano a mais.",
                ko: "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 70데미지를 추가한다."
            }
        },
    ],

    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],

    retreat: 1,
}

export default card