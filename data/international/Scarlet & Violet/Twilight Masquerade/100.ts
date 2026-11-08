import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Hisuian Arcanine",
		'fr-fr': "Arcanin de Hisui",
		'es-es': "Arcanine de Hisui",
		'it-it': "Arcanine di Hisui",
		'pt-br': "Arcanine de Hisui",
		'de-de': "Hisui-Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Hisuian Growlithe",
		'fr-fr': "Caninos de Hisui",
		'es-es': "Growlithe de Hisui",
		'it-it': "Growlithe di Hisui",
		'pt-br': "Growlithe de Hisui",
		'de-de': "Hisui-Fukano"
	},
	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Proud Fangs",
			'fr-fr': "Crocs Fiers",
			'es-es': "Colmillos Imponentes",
			'it-it': "Zanne Fiere",
			'pt-br': "Presas Orgulhosas",
			'de-de': "Stattliche Fänge"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'es-es': "Llama Abrasadora",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'de-de': "Sengende Flammen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769274,
				tcgplayer: 550144
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769274,
				tcgplayer: 550144
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858725,
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 883809,
			}
		},
	],

	illustrator: "SIE NANAHARA",

	description: {
		'en-us': "Snaps at its foes with fangs cloaked in blazing flame. Despite its bulk, it deftly feints every which way, leading opponents on a deceptively merry chase as it all but dances around them.",
	},

	thirdParty: {
		cardmarket: 769274
	}
}

export default card
