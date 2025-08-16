import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [117],
	set: Set,

	name: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Swim Freely",
			fr: "Nage Libre",
			es: "Nado Libre",
			it: "Nuotata Libera",
			pt: "Nadar Sossegado",
			de: "Freischwimmen"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}, {
		cost: ["Water"],

		name: {
			en: "Hydro Jet",
			fr: "Hydro-Jet",
			es: "Hidropropulsión",
			it: "Getto Idrico",
			pt: "Hidrojato",
			de: "Hydrostrahl"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Water Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Water attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Water unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia Water assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Water ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674047,
		tcgplayer: 283910
	}
}

export default card