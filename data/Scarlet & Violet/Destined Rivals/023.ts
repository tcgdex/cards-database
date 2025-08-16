import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [930],
	set: Set,

	name: {
		en: "Arboliva ex",
		fr: "Arboliva-ex",
		de: "Olithena-ex",
		it: "Arboliva-ex",
		es: "Arboliva ex",
		pt: "Arboliva ex",
		'es-mx': "Arboliva ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Oil Salvo",
			fr: "Salve d'Huile",
			de: "Ölsalve",
			it: "Oliomitraglia",
			es: "Salva Aceitosa",
			pt: "Saraivada de Óleo",
			'es-mx': "Artillería Aceitosa"
		},

		effect: {
			en: "Choose 1 of your opponent's Pokémon 6 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 20 damage to it. This damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez 6 fois l'un des Pokémon de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois que vous choisissez un Pokémon, infligez-lui 20 dégâts. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Wähle 6-mal 1 Pokémon deines Gegners. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Jedes Mal, wenn du ein Pokémon wählst, füge ihm 20 Schadenspunkte zu. Dieser Schaden wird durch Schwäche oder Resistenz nicht verändert.",
			it: "Scegli sei volte uno dei Pokémon del tuo avversario. Puoi scegliere lo stesso Pokémon più di una volta. Ogni volta che scegli un Pokémon, infliggigli 20 danni. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
			es: "Elige 1 de los Pokémon de tu rival 6 veces. (Puedes elegir el mismo Pokémon más de una vez). Cada vez que elijas un Pokémon, hazle 20 puntos de daño a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia.",
			pt: "Escolha 1 dos Pokémon do seu oponente 6 vezes. (Você pode escolher o mesmo Pokémon mais de uma vez). Para cada vez que você escolher um Pokémon, cause 20 pontos de dano a ele. Este dano não é afetado por Fraqueza ou Resistência.",
			'es-mx': "Elige 1 de los Pokémon de tu rival 6 veces. (Puedes elegir el mismo Pokémon más de una vez). Cada vez que elijas un Pokémon, hazle 20 puntos de daño a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Aroma Shot",
			fr: "Tir Arôme",
			de: "Aromaschuss",
			it: "Colpo Aroma",
			es: "Disparo Aromático",
			pt: "Disparo Aromático",
			'es-mx': "Disparo Aromático"
		},

		effect: {
			en: "This Pokémon recovers from all Special Conditions.",
			fr: "Ce Pokémon guérit de tous les États Spéciaux.",
			de: "Dieses Pokémon erholt sich von allen Speziellen Zuständen.",
			it: "Questo Pokémon guarisce da tutte le condizioni speciali.",
			es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
			pt: "Este Pokémon se recupera de todas as Condições Especiais.",
			'es-mx': "Este Pokémon se recupera de todas las Condiciones Especiales."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card