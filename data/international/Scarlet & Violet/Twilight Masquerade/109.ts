import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [970],
	set: Set,

	name: {
		'en-us': "Glimmora",
		'fr-fr': "Floréclat",
		'es-es': "Glimmora",
		'it-it': "Glimmora",
		'pt-br': "Glimmora",
		'de-de': "Lumiflora"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Glimmet",
		'fr-fr': "Germéclat",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stun Poison",
			'fr-fr': "Poison Neural",
			'es-es': "Veneno Paralizador",
			'it-it': "Bloccanervi",
			'pt-br': "Veneno Atordoante",
			'de-de': "Nervengift"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'de-de': "Giftschock"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Glimmora's petals are made of crystallized poison energy. It has recently become evident that these petals resemble Tera Jewels.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769283,
				tcgplayer: 550153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769283,
				tcgplayer: 550153
			}
		},
	],

	illustrator: "Kazumasa Yasukuni",

}

export default card