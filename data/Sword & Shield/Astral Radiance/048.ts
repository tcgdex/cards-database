import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Avalugg",
		fr: "Séracrawl de Hisui",
		es: "Avalugg de Hisui",
		it: "Avalugg di Hisui",
		pt: "Avalugg de Hisui",
		de: "Hisui-Arktilas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		it: "Bergmite",
		pt: "Bergmite",
		de: "Arktip"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Massive Ice",
			fr: "Glace Massive",
			es: "Hielo Masivo",
			it: "Superghiaccio",
			pt: "Gelo Massivo",
			de: "Massives Eis"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Mountain Gale",
			fr: "Bise Glaciaire",
			es: "Viento Carámbano",
			it: "Soffio d'Iceberg",
			pt: "Vendaval Montanhoso",
			de: "Frostfallwind"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			es: "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			it: "Se c'è in gioco una carta Stadio, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card