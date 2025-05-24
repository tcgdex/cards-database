import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		fr: "Poissoroy",
		en: "Seaking",
		es: "Seaking",
		it: "Seaking",
		pt: "Seaking",
		de: "Golking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Nage Libre",
			en: "Swim Freely",
			es: "Nado Libre",
			it: "Nuotata Libera",
			pt: "Nadar Sossegado",
			de: "Freischwimmen"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Aqua-Corne",
			en: "Aqua Horn",
			es: "Cuerno Aqua",
			it: "Idrocorno",
			pt: "Chifre Aquático",
			de: "Aquahorn"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each {W} Energy attached to this Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "SIE NANAHARA"
}

export default card