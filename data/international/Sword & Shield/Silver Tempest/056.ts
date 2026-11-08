import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora",
		'es-es': "Zeraora",
		'it-it': "Zeraora",
		'pt-br': "Zeraora",
		'de-de': "Zeraora"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Battle Claw",
			'fr-fr': "Griffe de Combat",
			'es-es': "Garra Combativa",
			'it-it': "Artiglio Lotta",
			'pt-br': "Garra de Batalha",
			'de-de': "Kampfkralle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682103,
				tcgplayer: 451712
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682103,
				tcgplayer: 451712
			}
		},
	],
}

export default card
