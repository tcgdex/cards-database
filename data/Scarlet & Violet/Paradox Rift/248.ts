import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Hands ex",
		fr: "Paume-de-Fer-ex",
		es: "Ferropalmas ex",
		it: "Manoferrea-ex",
		pt: "Mãos Férreas ex",
		de: "Eisenhand-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Arm Press",
			fr: "Pression des Bras",
			es: "Prensa de Brazo",
			it: "Pressabraccio",
			pt: "Compressão de Braço",
			de: "Armpresse"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Amp You Very Much",
			fr: "Multi Beaucoup",
			es: "Gracias Amplificadas",
			it: "Mille Volt Grazie",
			pt: "Gratiluz",
			de: "Amplifizierter Dank"
		},

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card