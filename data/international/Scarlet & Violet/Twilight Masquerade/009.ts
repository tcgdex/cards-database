import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [313],
	set: Set,

	name: {
		'en-us': "Volbeat",
		'fr-fr': "Muciole",
		'es-es': "Volbeat",
		'it-it': "Volbeat",
		'pt-br': "Volbeat",
		'de-de': "Volbeat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Quick Sign",
			'fr-fr': "Signe Rapide",
			'es-es': "Señal Rápida",
			'it-it': "Segnale Rapido",
			'pt-br': "Sinal Imediato",
			'de-de': "Schnelles Zeichen"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Coordinated Strike",
			'fr-fr': "Frappe Coordonnée",
			'es-es': "Golpe Coordinado",
			'it-it': "Attacco Coordinato",
			'pt-br': "Golpe Coordenado",
			'de-de': "Koordinierter Angriff"
		},

		effect: {
			'en-us': "If Illumise is on your Bench, this attack does 60 more damage.",
			'fr-fr': "Si Lumivole est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si Illumise está en tu Banca, este ataque hace 60 puntos de daño más.",
			'it-it': "Se Illumise è nella tua panchina, questo attacco infligge 60 danni in più.",
			'pt-br': "Se Illumise estiver no seu Banco, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn sich Illumise auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It flashes the light on its rear to communicate with other Volbeat. It loves the sweet aroma given off by Illumise.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769183,
				tcgplayer: 550053
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769183,
				tcgplayer: 550053
			}
		},
	],

	illustrator: "Orca",

}

export default card