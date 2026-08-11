import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [609],

	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "Taira Akitsu",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Protective Glow",
				'fr-fr': "Lueur Protectrice",
				'es-es': "Brillo Protector",
				'it-it': "Lume Protettivo",
				'pt-br': "Brilho Protetor",
				'de-de': "Schützender Schein"
			},
			effect: {
				'en-us': "All of your Pokémon that have Energy attached have no Weakness.",
				'fr-fr': "Vos Pokémon auxquels de l'Énergie est attachée n'ont pas de Faiblesse.",
				'es-es': "Ninguno de tus Pokémon que tenga alguna Energía unida a él tiene Debilidad.",
				'it-it': "Tutti i tuoi Pokémon che hanno delle Energie assegnate non hanno debolezza.",
				'pt-br': "Todos os seus Pokémon que tenham Energia ligada a eles não têm Fraqueza.",
				'de-de': "Alle deine Pokémon, an die Energie angelegt ist, haben keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Mirage Flare",
				'fr-fr': "Mirage Flamboyant",
				'es-es': "Destello Espejismo",
				'it-it': "Miraggio Abbagliante",
				'pt-br': "Miragem de Chamas",
				'de-de': "Illusionsflackern"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 140,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "This Pokémon haunts dilapidated mansions. It sways its arms to hypnotize opponents with the ominous dancing of its flames."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457623,
				tcgplayer: 213109
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457623,
				tcgplayer: 213109
			}
		},
	],
}

export default card
