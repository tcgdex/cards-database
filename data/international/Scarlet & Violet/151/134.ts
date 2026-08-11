import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		'fr-fr': "Aquali",
		'en-us': "Vaporeon",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Spirale Épuisante",
			'en-us': "Spiral Drain",
			'es-es': "Drenaje Espiral",
			'it-it': "Assorbimento Spirale",
			'pt-br': "Dreno Espiral",
			'de-de': "Spiralsauger"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tourbillon Combatif",
			'en-us': "Fighting Whirlpool",
			'es-es': "Remolino Luchador",
			'it-it': "Mulinello Combattente",
			'pt-br': "Luta Redemoinho",
			'de-de': "Strudelfäuste"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
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

	description: {
		'en-us': "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733729,
				tcgplayer: 516697,
				cardtrader: 261238
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733729,
				tcgplayer: 516697,
				cardtrader: 261238
			}
		},
	],

	illustrator: "kirisAki",

	
}

export default card
