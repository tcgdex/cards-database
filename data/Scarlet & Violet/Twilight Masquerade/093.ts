import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus",
		fr: "Amovénus",
		es: "Enamorus",
		it: "Enamorus",
		pt: "Enamorus",
		de: "Cupidos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Heart Sign",
			fr: "Signe de Cœur",
			es: "Señal Corazón",
			it: "Cuoricino",
			pt: "Sinal de Coração",
			de: "Herzbild"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Love Resonance",
			fr: "Résonance Amoureuse",
			es: "Resonancia Amorosa",
			it: "Risonanza Amorosa",
			pt: "Ressonância do Amor",
			de: "Liebesresonanz"
		},

		effect: {
			en: "If any of your Pokémon in play are the same type as any of your opponent's Pokémon in play, this attack does 120 more damage.",
			fr: "Si l'un de vos Pokémon en jeu est du même type que l'un des Pokémon en jeu de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon en juego es del mismo tipo que alguno de los Pokémon en juego de tu rival, este ataque hace 120 puntos de daño más.",
			it: "Se uno dei tuoi Pokémon in gioco è dello stesso tipo di uno dei Pokémon in gioco del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pokémon em jogo for do mesmo tipo que algum dos Pokémon do seu oponente em jogo, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Pokémon im Spiel denselben Typ hat wie mindestens 1 Pokémon deines Gegners im Spiel, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card