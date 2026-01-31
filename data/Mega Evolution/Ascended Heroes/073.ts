import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		'es-mx': "Miraidon ex",
		de: "Miraidon-ex",
		it: "Miraidon-ex",
		pt: "Miraidon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [1008],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			'es-mx': "Garra Cortante",
			de: "Schlitzende Klaue",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora"
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Hadron Spark",
			fr: "Étincelle à Hadrons",
			es: "Chispa Hadrónica",
			'es-mx': "Chispa Hadrónica",
			de: "Hadronen-Funke",
			it: "Scintilla Adronica",
			pt: "Faísca Hadrônica"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 120 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 120 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675885,
		cardmarket: 869684
	}
}

export default card