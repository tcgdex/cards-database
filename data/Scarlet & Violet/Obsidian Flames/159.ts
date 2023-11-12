import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Dracolosse-ex",
		en: "Dragonite ex",
		es: "Dragonite ex",
		it: "Dragonite-ex",
		pt: "Dragonite ex",
		de: "Dragoran-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Cru-Ailes",
			en: "Wing Attack",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 70
	}, {
		cost: ["Water", "Lightning"],

		name: {
			fr: "Météore Puissant",
			en: "Mighty Meteor",
			es: "Cometa Poderoso",
			it: "Meteorite Micidiale",
			pt: "Meteoro Poderoso",
			de: "Mächtiger Meteor"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 140 dégâts supplémentaires. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "Flip a coin. If heads, this attack does 140 more damage. If tails, during your next turn, this Pokémon can't attack.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 140 puntos de daño más. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 140 danni in più. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 140 pontos de dano a mais. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 140 Schadenspunkte mehr zu. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "140+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card