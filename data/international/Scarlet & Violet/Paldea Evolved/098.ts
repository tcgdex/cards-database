import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		'fr-fr': "Malvalame",
		'en-us': "Ceruledge",
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
		'fr-fr': "Charbambin",
		'en-us': "Charcadet",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Aspire-Vie",
			'en-us': "Life Sucker",
			'es-es': "Sorbevidas",
			'it-it': "Aspiravita",
			'pt-br': "Sugador de Vida",
			'de-de': "Lebenssauger"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Épée Combattante",
			'en-us': "Fighting Sword",
			'es-es': "Espada Combativa",
			'it-it': "Spada Combattente",
			'pt-br': "Espada de Combate",
			'de-de': "Kampfschwert"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 100 more damage.",
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
				cardmarket: 766668,
				tcgplayer: 497513,
				cardtrader: 248727
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715573,
				tcgplayer: 497513,
				cardtrader: 248727
			}
		},
	],

	illustrator: "Ryota Murayama",

	description: {
		'en-us': "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",
	},
}

export default card
