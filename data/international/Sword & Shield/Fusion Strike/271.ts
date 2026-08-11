import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'en-us': "Gengar VMAX",
		'fr-fr': "Ectoplasma VMAX",
		'es-es': "Gengar VMAX",
		'it-it': "Gengar VMAX",
		'pt-br': "Gengar VMAX",
		'de-de': "Gengar VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Gengar V",
		'fr-fr': "Ectoplasma-V",
		'es-es': "Gengar V",
		'it-it': "Gengar-V",
		'pt-br': "Gengar V",
		'de-de': "Gengar-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Fear and Panic",
			'fr-fr': "Peur Panique",
			'de-de': "Angst und Bange",
			'es-es': "Temor y Pánico",
			'pt-br': "Terror e Pânico",
			'it-it': "Paura e Ansia"
		},

		damage: "60×",

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
			'de-de': "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 60 Schadenspunkte zu.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon V e Pokémon-GX do seu oponente em jogo.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "G-Max Swallow Up",
			'fr-fr': "Engloutissement G-Max",
			'de-de': "Giga-Runterschlucken",
			'es-es': "Gigaengullir",
			'pt-br': "Engolir por Inteiro G-Max",
			'it-it': "Gigainghiottire"
		},

		damage: 250,

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 583024,
				tcgplayer: 253266
			}
		},
	],
}

export default card
