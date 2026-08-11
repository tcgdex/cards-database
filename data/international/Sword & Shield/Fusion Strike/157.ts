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

	rarity: "Holo Rare VMAX",
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
	retreat: 3,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Fear and Panic",
			'fr-fr': "Peur Panique",
			'es-es': "Temor y Pánico",
			'it-it': "Paura e Ansia",
			'de-de': "Angst und Bange",
			'pt-br': "Terror e Pânico"
		},

		damage: "60×",

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario.",
			'de-de': "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 60 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon V e Pokémon-GX do seu oponente em jogo."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "G-Max Swallow Up",
			'fr-fr': "Engloutissement G-Max",
			'es-es': "Gigaengullir",
			'it-it': "Gigainghiottire",
			'de-de': "Giga-Runterschlucken",
			'pt-br': "Engolir por Inteiro G-Max"
		},

		damage: 250,

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582785,
				tcgplayer: 253371
			}
		},
	],
}

export default card
