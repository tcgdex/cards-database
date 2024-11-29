import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Eternatus",
		fr: "Éthernatos",
		es: "Eternatus",
		it: "Eternatus",
		pt: "Eternatus",
		de: "Endynalos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dyna-Blast",
			fr: "Dyna-Explosion",
			es: "Dinaexplosión",
			it: "Esplosione Max",
			pt: "Dinaexplosão",
			de: "Dynamische Detonation"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fire", "Darkness", "Darkness"],

		name: {
			en: "World Ender",
			fr: "Fin du Monde",
			es: "Fin del Mundo",
			it: "Finiscimondo",
			pt: "Emissário do Apocalipse",
			de: "Weltenzerstörer"
		},

		effect: {
			en: "Discard a Stadium in play. If you can't, this attack does nothing.",
			fr: "Défaussez un Stade en jeu. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			es: "Descarta 1 Estadio en juego. Si no puedes, este ataque no hace nada.",
			it: "Scarta una carta Stadio in gioco. Se non puoi, questo attacco non ha effetto.",
			pt: "Descarte um Estádio em jogo. Se não puder fazer isto, este ataque não fará nada.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	}
}

export default card
