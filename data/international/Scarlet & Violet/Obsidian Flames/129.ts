import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [980],
	set: Set,

	name: {
		'fr-fr': "Terraiste de Paldea",
		'en-us': "Paldean Clodsire",
		'es-es': "Clodsire de Paldea",
		'it-it': "Clodsire di Paldea",
		'pt-br': "Clodsire de Paldea",
		'de-de': "Paldea-Suelord"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Poison Éclaboussant",
			'en-us': "Splattering Poison",
			'es-es': "Veneno Salpicante",
			'it-it': "Spruzzata di Veleno",
			'pt-br': "Respingar Veneno",
			'de-de': "Giftgespritze"
		},

		effect: {
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			'en-us': "Both Active Pokémon are now Poisoned.",
			'es-es': "Ambos Pokémon Activos pasan a estar Envenenados.",
			'it-it': "Entrambi i Pokémon attivi vengono avvelenati.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Envenenados.",
			'de-de': "Beide Aktiven Pokémon sind jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Choc Venin",
			'en-us': "Venoshock",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'de-de': "Giftschock"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 120 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It's a risky move that puts everything on the line.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725209,
				tcgplayer: 509887,
				cardtrader: 255814
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725209,
				tcgplayer: 509887,
				cardtrader: 255814
			}
		},
	],

	illustrator: "Shin Nagasawa",

	
}

export default card
