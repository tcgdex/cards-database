import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		fr: "Corvaillus",
		en: "Corviknight",
		es: "Corviknight",
		it: "Corviknight",
		pt: "Corviknight",
		de: "Krarmor"
	},

	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		fr: "Bleuseille",
		en: "Corvisquire"
	},

	attacks: [{
		name: {
			fr: "Picpic",
			en: "Peck",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Ailes de Fer",
			en: "Iron Wings",
			es: "Alas Férreas",
			it: "Ali d'Acciaio",
			pt: "Asas de Ferro",
			de: "Eiserne Flügel"
		},

		effect: {
			fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			es: "Puedes descartar 2 Energías de este Pokémon. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Puoi scartare due Energie da questo Pokémon. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Você pode descartar 2 Energias deste Pokémon. Se fizer isto, durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		en: "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe."
	}
}

export default card
