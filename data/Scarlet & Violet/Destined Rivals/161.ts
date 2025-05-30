import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Maushold",
		fr: "Famignol",
		de: "Famieps",
		it: "Maushold",
		es: "Maushold",
		pt: "Maushold"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			de: "Hieb",
			it: "Sberla",
			es: "Bofetón",
			pt: "Tapa"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Family Attack",
			fr: "Attaque en Famille",
			de: "Familienangriff",
			it: "Attacco di Famiglia",
			es: "Ataque en Familia",
			pt: "Ataque em Família"
		},

		effect: {
			en: "This attack does 70 damage for each of your Maushold in play.",
			fr: "Cette attaque inflige 70 dégâts pour chacun de vos Famignol en jeu.",
			de: "Diese Attacke fügt für jedes deiner Famieps im Spiel 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni tuo Maushold in gioco.",
			es: "Este ataque hace 70 puntos de daño por cada uno de tus Maushold en juego.",
			pt: "Este ataque causa 70 pontos de dano para cada um dos seus Maushold em jogo."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card