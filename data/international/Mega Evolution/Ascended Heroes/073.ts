import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miraidon ex",
		'fr-fr': "Miraidon-ex",
		'es-es': "Miraidon ex",
		'es-mx': "Miraidon ex",
		'de-de': "Miraidon-ex",
		'it-it': "Miraidon-ex",
		'pt-br': "Miraidon ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante",
			'es-es': "Garra Cuchillazo",
			'es-mx': "Garra Cortante",
			'de-de': "Schlitzende Klaue",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora"
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Hadron Spark",
			'fr-fr': "Étincelle à Hadrons",
			'es-es': "Chispa Hadrónica",
			'es-mx': "Chispa Hadrónica",
			'de-de': "Hadronen-Funke",
			'it-it': "Scintilla Adronica",
			'pt-br': "Faísca Hadrônica"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 120 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 120 pontos de dano a mais."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869684,
				tcgplayer: 675885
			}
		}
	],
}

export default card
