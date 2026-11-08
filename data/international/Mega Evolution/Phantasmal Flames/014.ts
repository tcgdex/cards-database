import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'es-mx': "Moltres",
		'de-de': "Lavados",
		'it-it': "Moltres",
		'pt-br': "Moltres"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [146],
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fighting Wings",
			'fr-fr': "Ailes Combatives",
			'es-es': "Alas Luchadoras",
			'es-mx': "Alas Tenaces",
			'de-de': "Kampfschwingen",
			'it-it': "Ali Combattenti",
			'pt-br': "Asas de Luta"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 90 pontos de dano a mais."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "There are stories of this Pokémon using its radiant, flame-cloaked wings to light up paths for those lost in the mountains.",
	},

	illustrator: "Kazumasa Yasukuni",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 858503,
				cardtrader: 356797
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857589,
				tcgplayer: 662201,
				cardtrader: 356797
			}
		},
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857589,
				tcgplayer: 662201
			}
		},
	],
}

export default card
