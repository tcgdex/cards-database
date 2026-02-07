import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		en: "Lillie's Clefairy ex",
		fr: "Mélofée-ex de Lilie",
		de: "Lillys Piepi-ex",
		es: "Clefairy ex de Lylia",
		it: "Clefairy-ex di Lylia",
		pt: "Clefairy ex da Lílian"
	},


	illustrator: "PLANETA Tsuji",

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fairy Zone",
			fr: "Zone Féérique",
			de: "Feenzone",
			es: "Zona Feérica",
			it: "Area Folletto",
			pt: "Zona de Fadas"
		},

		effect: {
			en: "The Weakness of each of your opponent's {N} Pokémon in play is now {P}. (Apply Weakness as ×2.)",
			fr: "La Faiblesse de chacun des Pokémon {N} en jeu de votre adversaire est maintenant de type {P}. (Appliquez une Faiblesse de ×2.)",
			de: "Die Schwäche jedes {N}-Pokémon deines Gegners im Spiel ist jetzt {P}. (Verrechne Schwäche als ×2.)",
			es: "La Debilidad de cada uno de los Pokémon {N} en juego de tu rival pasa a ser {P}. (Aplica una Debilidad de × 2).",
			it: "La debolezza di ciascuno dei Pokémon {N} in gioco del tuo avversario diventa {P}. La debolezza è ×2.",
			pt: "A Fraqueza de cada um dos Pokémon {N} do seu oponente em jogo agora é {P}. (Aplique Fraqueza de ×2.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Full Moon Rondo",
			fr: "Zone Féérique"
		},

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "La Faiblesse de chacun des Pokémon {N} en jeu de votre adversaire est maintenant de type {P}. (Appliquez une Faiblesse de ×2.)"
		},

		damage: "20+"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Rondo Pleine Lune"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire)."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card
