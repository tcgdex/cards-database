import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		it: "Ambipom",
		pt: "Ambipom",
		de: "Ambidiffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primate Dexterity",
			fr: "Dextérité du Primate",
			es: "Destreza Primate",
			it: "Destrezza del Primate",
			pt: "Destreza Primata",
			de: "Primaten-Geschick"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
			it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, previna aquele dano.",
			de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Full Tilt Fling",
			fr: "Lancer Absolu",
			es: "Lanzamiento Total",
			it: "Lancio Sfrecciante",
			pt: "Arremesso Veloz",
			de: "Volldampfwurf"
		},

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
			pt: "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 60 pontos de dano para cada cara.",
			de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card