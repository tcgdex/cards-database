import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Politoed",
		fr: "Tarpaud",
		es: "Politoed",
		it: "Politoed",
		pt: "Politoed",
		de: "Quaxo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lordly Songleader",
			fr: "Digne Meneur",
			es: "Majestuosa Voz Cantante",
			it: "Voce Altisonante",
			pt: "Maestro Nobre",
			de: "Glorreicher Vorsänger"
		},

		effect: {
			en: "If Poliwag is on your Bench, this attack does 60 more damage. If Poliwhirl is on your Bench, this attack does 90 more damage. If Poliwrath is on your Bench, this attack does 120 more damage.",
			fr: "Si Ptitard est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires. Si Têtarte est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires. Si Tartard est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si Poliwag está en tu Banca, este ataque hace 60 puntos de daño más. Si Poliwhirl está en tu Banca, este ataque hace 90 puntos de daño más. Si Poliwrath está en tu Banca, este ataque hace 120 puntos de daño más.",
			it: "Se Poliwag è nella tua panchina, questo attacco infligge 60 danni in più. Se Poliwhirl è nella tua panchina, questo attacco infligge 90 danni in più. Se Poliwrath è nella tua panchina, questo attacco infligge 120 danni in più.",
			pt: "Se Poliwag estiver no seu Banco, este ataque causará 60 pontos de dano a mais. Se Poliwhirl estiver no seu Banco, este ataque causará 90 pontos de dano a mais. Se Poliwrath estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn sich Quapsel auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu. Wenn sich Quaputzi auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu. Wenn sich Quappo auf deiner Bank befindet, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card