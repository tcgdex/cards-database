import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [990],
	set: Set,

	name: {
		'en-us': "Iron Treads ex",
		'fr-fr': "Roue-de-Fer-ex",
		'es-es': "Ferrodada ex",
		'it-it': "Solcoferreo-ex",
		'pt-br': "Trilho Férreo ex",
		'de-de': "Eisenrad-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron-Clad Roll",
			'fr-fr': "Roulé de Fer",
			'es-es': "Voltereta Férrea",
			'it-it': "Rotolamento Corazzato",
			'pt-br': "Rolagem Chapa de Ferro",
			'de-de': "Eisenpanzerrolle"
		},

		effect: {
			'en-us': "After doing damage, you may discard all Future Booster Energy Capsules from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 150 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Après avoir infligé des dégâts, vous pouvez défausser toutes les Capsules Énergie Booster Temps Futur attachées à ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 150 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Después de infligir daño, puedes descartar todas las cartas de Tanque de Energía Potenciadora del Futuro de este Pokémon. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 150 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Dopo aver inflitto danni, puoi scartare tutte le carte Capsula energetica Tempo Futuro da questo Pokémon. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 150 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Depois de causar dano, você poderá descartar todas as Cápsulas Energéticas de Melhoria Futurista deste Pokémon. Se fizer isto, durante o próximo turno do seu oponente, este Pokémon receberá 150 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Nachdem du Schaden zugefügt hast, kannst du alle Energiekapseln aus der Zukunft von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 150 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751797,
				tcgplayer: 538686
			},
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 666603
			}
		}
	],
}

export default card
