import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Pendulum Influence",
			'fr-fr': "Influence Pendulaire",
			'es-es': "Influencia Pendular",
			'it-it': "Influenzapendolo",
			'pt-br': "Influência Pendular",
			'de-de': "Pendeleinfluss"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose an attack from 1 of your opponent's Pokémon in play and use it as this attack.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez une attaque de l'un des Pokémon en jeu de votre adversaire, et utilisez-la en tant que cette attaque.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige un ataque de uno de los Pokémon en juego de tu rival y úsalo para este ataque.",
			'it-it': "Lancia una moneta. Se esce testa, scegli un attacco di uno dei Pokémon in gioco del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha um ataque de 1 dos Pokémon do seu oponente em jogo e use-o como este ataque.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Attacke von 1 Pokémon deines Gegners im Spiel und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica",
			'de-de': "Psychosphäre"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Toshinao Aoki",

	description: {
		'en-us': "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby.",
	},

	thirdParty: {
        cardmarket: 702379,
        tcgplayer: 487946
    }
}

export default card