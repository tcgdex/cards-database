import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [186],
	set: Set,

	name: {
		'en-us': "Politoed",
		'fr-fr': "Tarpaud",
		'es-es': "Politoed",
		'it-it': "Politoed",
		'pt-br': "Politoed",
		'de-de': "Quaxo"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Lordly Songleader",
			'fr-fr': "Digne Meneur",
			'es-es': "Majestuosa Voz Cantante",
			'it-it': "Voce Altisonante",
			'pt-br': "Maestro Nobre",
			'de-de': "Glorreicher Vorsänger"
		},

		effect: {
			'en-us': "If Poliwag is on your Bench, this attack does 60 more damage. If Poliwhirl is on your Bench, this attack does 90 more damage. If Poliwrath is on your Bench, this attack does 120 more damage.",
			'fr-fr': "Si Ptitard est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires. Si Têtarte est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires. Si Tartard est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si Poliwag está en tu Banca, este ataque hace 60 puntos de daño más. Si Poliwhirl está en tu Banca, este ataque hace 90 puntos de daño más. Si Poliwrath está en tu Banca, este ataque hace 120 puntos de daño más.",
			'it-it': "Se Poliwag è nella tua panchina, questo attacco infligge 60 danni in più. Se Poliwhirl è nella tua panchina, questo attacco infligge 90 danni in più. Se Poliwrath è nella tua panchina, questo attacco infligge 120 danni in più.",
			'pt-br': "Se Poliwag estiver no seu Banco, este ataque causará 60 pontos de dano a mais. Se Poliwhirl estiver no seu Banco, este ataque causará 90 pontos de dano a mais. Se Poliwrath estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn sich Quapsel auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu. Wenn sich Quaputzi auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu. Wenn sich Quappo auf deiner Bank befindet, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'pt-br': "Hidroborrifada",
			'de-de': "Hydroplatscher"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674043,
				tcgplayer: 283905
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674043,
				tcgplayer: 283905
			}
		},
	],
}

export default card
