import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		'en-us': "Lillie's Clefairy ex",
		'fr-fr': "Mélofée-ex de Lilie",
		'de-de': "Lillys Piepi-ex",
		'es-es': "Clefairy ex de Lylia",
		'it-it': "Clefairy-ex di Lylia",
		'pt-br': "Clefairy ex da Lílian"
	},


	suffix: "ex",
	illustrator: "PLANETA Tsuji",

	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fairy Zone",
			'fr-fr': "Zone Féérique",
			'de-de': "Feenzone",
			'es-es': "Zona Feérica",
			'it-it': "Area Folletto",
			'pt-br': "Zona de Fadas"
		},

		effect: {
			'en-us': "The Weakness of each of your opponent's {N} Pokémon in play is now {P}. (Apply Weakness as ×2.)",
			'fr-fr': "La Faiblesse de chacun des Pokémon {N} en jeu de votre adversaire est maintenant de type {P}. (Appliquez une Faiblesse de ×2.)",
			'de-de': "Die Schwäche jedes {N}-Pokémon deines Gegners im Spiel ist jetzt {P}. (Verrechne Schwäche als ×2.)",
			'es-es': "La Debilidad de cada uno de los Pokémon {N} en juego de tu rival pasa a ser {P}. (Aplica una Debilidad de × 2).",
			'it-it': "La debolezza di ciascuno dei Pokémon {N} in gioco del tuo avversario diventa {P}. La debolezza è ×2.",
			'pt-br': "A Fraqueza de cada um dos Pokémon {N} do seu oponente em jogo agora é {P}. (Aplique Fraqueza de ×2.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Full Moon Rondo",
			'fr-fr': "Rondo Pleine Lune",
			'de-de': "Vollmondrondo",
			'es-es': "Rondó Luna Llena",
			'it-it': "Rondò Luna Piena",
			'pt-br': "Cântico da Lua Cheia"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente)."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 810396,
				tcgplayer: 628317
			},
		}
	],
}

export default card
