import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [313],
	set: Set,

	name: {
		en: "Volbeat",
		fr: "Muciole",
		es: "Volbeat",
		it: "Volbeat",
		pt: "Volbeat",
		de: "Volbeat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Quick Sign",
			fr: "Signe Rapide",
			es: "Señal Rápida",
			it: "Segnale Rapido",
			pt: "Sinal Imediato",
			de: "Schnelles Zeichen"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Coordinated Strike",
			fr: "Frappe Coordonnée",
			es: "Golpe Coordinado",
			it: "Attacco Coordinato",
			pt: "Golpe Coordenado",
			de: "Koordinierter Angriff"
		},

		effect: {
			en: "If Illumise is on your Bench, this attack does 60 more damage.",
			fr: "Si Lumivole est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si Illumise está en tu Banca, este ataque hace 60 puntos de daño más.",
			it: "Se Illumise è nella tua panchina, questo attacco infligge 60 danni in più.",
			pt: "Se Illumise estiver no seu Banco, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn sich Illumise auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Orca"
}

export default card