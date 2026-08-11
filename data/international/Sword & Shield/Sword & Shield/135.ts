import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Corviknight",
		'fr-fr': "Corvaillus",
		'es-es': "Corviknight",
		'it-it': "Corviknight",
		'pt-br': "Corviknight",
		'de-de': "Krarmor"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Corvisquire",
		'fr-fr': "Bleuseille",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Wings",
				'fr-fr': "Ailes de Fer",
				'es-es': "Alas Férreas",
				'it-it': "Ali d'Acciaio",
				'pt-br': "Asas de Ferro",
				'de-de': "Eiserne Flügel"
			},
			effect: {
				'en-us': "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Vous pouvez défausser 2 Énergies de ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Puedes descartar 2 Energías de este Pokémon. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Puoi scartare due Energie da questo Pokémon. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Você pode descartar 2 Energias deste Pokémon. Se fizer isto, durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe."
	},

	dexId: [823],

	thirdParty: {
		cardmarket: 436784,
		tcgplayer: 208446
	}
}

export default card
