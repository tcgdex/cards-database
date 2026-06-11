import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [980],
	set: Set,

	name: {
		fr: "Terraiste de Paldea",
		en: "Paldean Clodsire",
		es: "Clodsire de Paldea",
		it: "Clodsire di Paldea",
		pt: "Clodsire de Paldea",
		de: "Paldea-Suelord"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		fr: "Axoloto de Paldea",
		en: "Paldean Wooper",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea",
		de: "Paldea-Felino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Poison Éclaboussant",
			en: "Splattering Poison",
			es: "Veneno Salpicante",
			it: "Spruzzata di Veleno",
			pt: "Respingar Veneno",
			de: "Giftgespritze"
		},

		effect: {
			fr: "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			en: "Both Active Pokémon are now Poisoned.",
			es: "Ambos Pokémon Activos pasan a estar Envenenados.",
			it: "Entrambi i Pokémon attivi vengono avvelenati.",
			pt: "Ambos os Pokémon Ativos agora estão Envenenados.",
			de: "Beide Aktiven Pokémon sind jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Choc Venin",
			en: "Venoshock",
			es: "Carga Tóxica",
			it: "Velenoshock",
			pt: "Venochoque",
			de: "Giftschock"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 120 more damage.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
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
		en: "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It's a risky move that puts everything on the line.",
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
