import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Fezandipiti ex",
		fr: "Favianos-ex",
		es: "Fezandipiti ex",
		'es-mx': "Fezandipiti ex",
		de: "Beatori-ex",
		it: "Fezandipiti-ex",
		pt: "Fezandipiti ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [1016],

	abilities: [{
		type: "Ability",

		name: {
			en: "Flip the Script",
			fr: "Renverser la Tendance",
			es: "Giro de Guion",
			'es-mx': "Giro de Guion",
			de: "Umdichten",
			it: "Ribaltasorte",
			pt: "Sair do Roteiro"
		},

		effect: {
			en: "Once during your turn, if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 3 cards. You can't use more than 1 Flip the Script Ability each turn.",
			fr: "Une fois pendant votre tour, si l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez piocher 3 cartes. Vous ne pouvez utiliser qu'un talent Renverser la Tendance par tour.",
			es: "Una vez durante tu turno, si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, puedes robar 3 cartas. No puedes usar más de una habilidad Giro de Guion en cada turno.",
			'es-mx': "Una vez durante tu turno, si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, puedes robar 3 cartas. No puedes usar más de 1 Habilidad Giro de Guion en cada turno.",
			de: "Einmal während deines Zuges, wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, kannst du 3 Karten ziehen. Du kannst die Fähigkeit Umdichten nur einmal pro Zug einsetzen.",
			it: "Una sola volta durante il tuo turno, se uno dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, puoi pescare tre carte. Puoi usare l'abilità Ribaltasorte solo una volta per turno.",
			pt: "Uma vez durante o seu turno, se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, você poderá comprar 3 cartas. Você não pode usar mais de 1 Habilidade Sair do Roteiro por turno."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Cruel Arrow",
			fr: "Flèche Cruelle",
			es: "Flecha Cruel",
			'es-mx': "Flecha Cruel",
			de: "Grausamer Pfeil",
			it: "Freccia Crudele",
			pt: "Flecha Cruel"
		},

		effect: {
			en: "This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 100 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 100 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675954,
		cardmarket: 869753
	}
}

export default card