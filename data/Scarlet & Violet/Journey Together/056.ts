import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [35],
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

	rarity: "Double rare",
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
			en: "The Weakness of each of your opponent's {N} Pokémon in play is now {P}. (Apply Weakness as ×2.)",
			fr: "La Faiblesse de chacun des Pokémon {N} en jeu de votre adversaire est maintenant de type {P}. (Appliquez une Faiblesse de ×2.)",
			es: "La Debilidad de cada uno de los Pokémon {N} en juego de tu rival pasa a ser {P}. (Aplica una Debilidad de × 2).",
			de: "Die Schwäche jedes {N}-Pokémon deines Gegners im Spiel ist jetzt {P}. (Verrechne Schwäche als ×2.)",
			it: "La debolezza di ciascuno dei Pokémon {N} in gioco del tuo avversario diventa {P}. La debolezza è ×2.",
			pt: "A Fraqueza de cada um dos Pokémon {N} do seu oponente em jogo agora é {P}. (Aplique Fraqueza de ×2.)",
			'es-mx': "La Debilidad de cada uno de los Pokémon Dragon en juego de tu rival ahora es Psychic. (Aplica Debilidad de × 2)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Full Moon Rondo",
			fr: "Rondo Pleine Lune",
			es: "Rondó Luna Llena",
			de: "Vollmondrondo",
			it: "Rondò Luna Piena",
			pt: "Cântico da Lua Cheia"
		},

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente)."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 817208
	}
}

export default card
