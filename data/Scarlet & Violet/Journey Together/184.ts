import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Clefairy ex",
		fr: "Mélofée-ex de Lilie",
		es: "Clefairy ex de Lylia",
		de: "Lillys Piepi-ex",
		it: "Clefairy-ex di Lylia",
		pt: "Clefairy ex da Lílian",
		'es-mx': "Clefairy ex de Lillie"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fairy Zone",
			fr: "Zone Féérique",
			es: "Zona Feérica",
			de: "Feenzone",
			it: "Area Folletto",
			pt: "Zona de Fadas",
			'es-mx': "Zona Feérica"
		},

		effect: {
			en: "The Weakness of each of your opponent's Dragon Pokémon in play is now Psychic. (Apply Weakness as ×2.)",
			fr: "La Faiblesse de chacun des Pokémon Dragon en jeu de votre adversaire est maintenant de type Psychic. (Appliquez une Faiblesse de ×2.)",
			es: "La Debilidad de cada uno de los Pokémon Dragon en juego de tu rival pasa a ser Psychic. (Aplica una Debilidad de × 2).",
			de: "Die Schwäche jedes Dragon-Pokémon deines Gegners im Spiel ist jetzt Psychic. (Verrechne Schwäche als ×2.)",
			it: "La debolezza di ciascuno dei Pokémon Dragon in gioco del tuo avversario diventa Psychic. La debolezza è ×2.",
			pt: "A Fraqueza de cada um dos Pokémon Dragon do seu oponente em jogo agora é Psychic. (Aplique Fraqueza de ×2.)",
			'es-mx': "La Debilidad de cada uno de los Pokémon Dragon en juego de tu rival ahora es Psychic. (Aplica Debilidad de × 2)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Full Moon Rondo",
			fr: "Rondo Pleine Lune",
			es: "Rondó Luna Llena"
		},

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival)."
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
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
