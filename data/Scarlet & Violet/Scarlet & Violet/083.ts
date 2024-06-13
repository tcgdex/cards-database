import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drowzee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pendulum Influence",
			fr: "Influence Pendulaire",
			es: "Influencia Pendular",
			it: "Influenzapendolo",
			pt: "Influência Pendular",
			de: "Pendeleinfluss"
		},

		effect: {
			en: "Flip a coin. If heads, choose an attack from 1 of your opponent's Pokémon in play and use it as this attack.",
			fr: "Lancez une pièce. Si c'est face, choisissez une attaque de l'un des Pokémon en jeu de votre adversaire, et utilisez-la en tant que cette attaque.",
			es: "Lanza 1 moneda. Si sale cara, elige un ataque de uno de los Pokémon en juego de tu rival y úsalo para este ataque.",
			it: "Lancia una moneta. Se esce testa, scegli un attacco di uno dei Pokémon in gioco del tuo avversario e usalo al posto di questo attacco.",
			pt: "Jogue uma moeda. Se sair cara, escolha um ataque de 1 dos Pokémon do seu oponente em jogo e use-o como este ataque.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Attacke von 1 Pokémon deines Gegners im Spiel und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card