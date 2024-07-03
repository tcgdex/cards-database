import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Treads ex",
		fr: "Roue-de-Fer-ex",
		es: "Ferrodada ex",
		it: "Solcoferreo-ex",
		pt: "Trilho Férreo ex",
		de: "Eisenrad-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron-Clad Roll",
			fr: "Roulé de Fer",
			es: "Voltereta Férrea",
			it: "Rotolamento Corazzato",
			pt: "Rolagem Chapa de Ferro",
			de: "Eisenpanzerrolle"
		},

		effect: {
			en: "After doing damage, you may discard all Future Booster Energy Capsules from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 150 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Après avoir infligé des dégâts, vous pouvez défausser toutes les Capsules Énergie Booster Temps Futur attachées à ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 150 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Después de infligir daño, puedes descartar todas las cartas de Tanque de Energía Potenciadora del Futuro de este Pokémon. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 150 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Dopo aver inflitto danni, puoi scartare tutte le carte Capsula energetica Tempo Futuro da questo Pokémon. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 150 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Depois de causar dano, você poderá descartar todas as Cápsulas Energéticas de Melhoria Futurista deste Pokémon. Se fizer isto, durante o próximo turno do seu oponente, este Pokémon receberá 150 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Nachdem du Schaden zugefügt hast, kannst du alle Energiekapseln aus der Zukunft von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 150 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card