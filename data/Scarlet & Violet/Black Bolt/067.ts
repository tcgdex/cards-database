import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect ex",
		fr: "Genesect-ex",
		de: "Genesect-ex",
		it: "Genesect-ex",
		pt: "Genesect ex",
		es: "Genesect ex",
		'es-mx': "Genesect ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metallic Signal",
			fr: "Signal Métallique",
			de: "Metallisches Signal",
			it: "Segnale Metallico",
			pt: "Sinal Metálico",
			es: "Señal Metálica",
			'es-mx': "Señal Metálica"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 Evolution {M} Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon {M} Évolutifs, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Entwicklungs-{M}-Pokémon durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon Evoluzione {M}, mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 2 Pokémon {M} de Evolução no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon {M} Evolución, enseñarlos y ponerlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo hasta 2 Pokémon {M} Evolución, mostrarlos y ponerlos en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Protect Charge",
			fr: "Recharge Protectrice",
			de: "Schützender Sturmangriff",
			it: "Carica Protettiva",
			pt: "Carga Protetora",
			es: "Carga Protectora",
			'es-mx': "Carga Protectora"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card