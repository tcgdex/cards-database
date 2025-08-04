import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar VMAX",
		fr: "Ectoplasma VMAX",
		es: "Gengar VMAX",
		it: "Gengar VMAX",
		pt: "Gengar VMAX",
		de: "Gengar VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Gengar V",
		fr: "Ectoplasma-V",
		es: "Gengar V",
		it: "Gengar-V",
		pt: "Gengar V",
		de: "Gengar-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Fear and Panic",
			fr: "Peur Panique",
			de: "Angst und Bange",
			es: "Temor y Pánico",
			pt: "Terror e Pânico",
			it: "Paura e Ansia"
		},

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
			de: "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 60 Schadenspunkte zu.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon V e Pokémon-GX do seu oponente em jogo.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "G-Max Swallow Up",
			fr: "Engloutissement G-Max",
			de: "Giga-Runterschlucken",
			es: "Gigaengullir",
			pt: "Engolir por Inteiro G-Max",
			it: "Gigainghiottire"
		},

		damage: 250,

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582785,
		tcgplayer: 253266
	}
}

export default card