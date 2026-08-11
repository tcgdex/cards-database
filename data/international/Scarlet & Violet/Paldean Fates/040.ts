import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		'en-us': "Ceruledge",
		'fr-fr': "Malvalame",
		'es-es': "Ceruledge",
		'it-it': "Ceruledge",
		'pt-br': "Ceruledge",
		'de-de': "Azugladis"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Life Sucker",
			'fr-fr': "Aspire-Vie",
			'es-es': "Sorbevidas",
			'it-it': "Aspiravita",
			'pt-br': "Sugador de Vida",
			'de-de': "Lebenssauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Fighting Sword",
			'fr-fr': "Épée Combattante",
			'es-es': "Espada Combativa",
			'it-it': "Spada Combattente",
			'pt-br': "Espada de Combate",
			'de-de': "Kampfschwert"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751577,
				tcgplayer: 534186,
				cardtrader: 274224
			}
		},
		{
			type: 'holo',
			stamp: ['pokemon-day'],
			thirdParty: {
				cardmarket: 756335
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751577,
				tcgplayer: 534186,
				cardtrader: 274224
			}
		},
	],

	illustrator: "Ryota Murayama",

	description: {
		'en-us': "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",
	},

}

export default card
