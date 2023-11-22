import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria ex",
		fr: "Altaria-ex",
		es: "Altaria ex",
		it: "Altaria-ex",
		pt: "Altaria ex",
		de: "Altaria-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Humming Heal",
			fr: "Soin Fredonnant",
			es: "Curación Cantarina",
			it: "Cura Canterina",
			pt: "Canto da Cura",
			de: "Heilendes Gesumme"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			en: "Light Pulse",
			fr: "Vibrumineuse",
			es: "Pulso Luminoso",
			it: "Lucepulsar",
			pt: "Pulso de Luz",
			de: "Sanfte Welle"
		},

		effect: {
			en: "During your opponent's next turn, prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Durante el próximo turno de tu rival, se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Durante o próximo turno do seu oponente, previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card