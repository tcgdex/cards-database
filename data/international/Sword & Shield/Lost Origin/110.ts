import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Fighting Headbutt",
			'fr-fr': "Coup d'Boule Combatif",
			'es-es': "Cabezazo Lucha",
			'it-it': "Bottintesta Combattente",
			'pt-br': "Cabeçada de Luta",
			'de-de': "Kämpferische Kopfnuss"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness. If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse. Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad. Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza. Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza. Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche nicht verändert. Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674123,
				tcgplayer: 284005
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674123,
				tcgplayer: 284005
			}
		},
	],
}

export default card
