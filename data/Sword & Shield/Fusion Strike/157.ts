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

	rarity: "Holo Rare VMAX",
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
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Fear and Panic",
			fr: "Peur Panique",
			es: "Temor y Pánico",
			it: "Paura e Ansia",
			de: "Angst und Bange"
		},

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario.",
			de: "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 60 Schadenspunkte zu."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "G-Max Swallow Up",
			fr: "Engloutissement G-Max",
			es: "Gigaengullir",
			it: "Gigainghiottire",
			de: "Giga-Runterschlucken"
		},

		damage: 250,

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
