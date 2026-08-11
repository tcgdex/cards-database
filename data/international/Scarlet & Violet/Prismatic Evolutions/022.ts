import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'pt-br': "Vaporeon",
		'it-it': "Vaporeon",
		'de-de': "Aquana"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Spiral Drain",
			'fr-fr': "Spirale Épuisante",
			'es-es': "Drenaje Espiral",
			'pt-br': "Dreno Espiral",
			'it-it': "Assorbimento Spirale",
			'de-de': "Spiralsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Fighting Whirlpool",
			'fr-fr': "Tourbillon Combatif",
			'es-es': "Remolino Luchador",
			'pt-br': "Luta Redemoinho",
			'it-it': "Mulinello Combattente",
			'de-de': "Strudelfäuste"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	illustrator: "kirisAki",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805411,
				tcgplayer: 610377
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805411,
				tcgplayer: 610377
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806440,
				tcgplayer: 610552
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806441,
				tcgplayer: 610653
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858730,
			}
		},
	],
}

export default card
