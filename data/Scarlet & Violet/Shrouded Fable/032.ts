import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Illusory Hijacking",
			fr: "Détournement Illusoire",
			es: "Secuestro Ilusorio",
			it: "Sopraffazione Illusoria",
			pt: "Apropriação Ilusória",
			de: "Illusionsübernahme"
		},

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon ex and Pokémon V in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-ex et Pokémon-V en jeu de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex y Pokémon V en juego de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon-ex e Pokémon-V in gioco del tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon ex e Pokémon V do seu oponente em jogo.",
			de: "Diese Attacke fügt für jedes Pokémon-ex und Pokémon-V deines Gegners im Spiel 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "nagimiso"
}

export default card
