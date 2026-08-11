import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		'en-us': "Vaporeon",
		'pt-br': "Vaporeon",
		'fr-fr': "Aquali",
		'de-de': "Aquana",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				'en-us': "Spiral Drain",
				'pt-br': "Dreno Espiral",
				'fr-fr': "Spirale Épuisante",
				'de-de': "Spiralsauger",
				'es-es': "Drenaje Espiral",
				'it-it': "Assorbimento Spirale"
			},

			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni."
			},

			damage: 30
		},
		{
			cost: ["Water", "Colorless", "Colorless"],

			name: {
				'en-us': "Fighting Whirlpool",
				'pt-br': "Luta Redemoinho",
				'fr-fr': "Tourbillon Combatif",
				'de-de': "Strudelfäuste",
				'es-es': "Remolino Luchador",
				'it-it': "Mulinello Combattente"
			},

			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più."
			},

			damage: "90+"
		}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Taira Akitsu",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 805365,
				tcgplayer: 611827
			},
		}
	],
}

export default card
