import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'fr-fr': "Corvaillus",
		'en-us': "Corviknight",
		'es-es': "Corviknight",
		'it-it': "Corviknight",
		'pt-br': "Corviknight",
		'de-de': "Krarmor"
	},

	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Bleuseille",
		'en-us': "Corvisquire"
	},

	attacks: [{
		name: {
			'fr-fr': "Picpic",
			'en-us': "Peck",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Ailes de Fer",
			'en-us': "Iron Wings",
			'es-es': "Alas Férreas",
			'it-it': "Ali d'Acciaio",
			'pt-br': "Asas de Ferro",
			'de-de': "Eiserne Flügel"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Puedes descartar 2 Energías de este Pokémon. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Puoi scartare due Energie da questo Pokémon. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Você pode descartar 2 Energias deste Pokémon. Se fizer isto, durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
		'en-us': "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539833,
				tcgplayer: 232473
			}
		},
	],
}

export default card
