import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'es-es': "Crawdaunt",
		'it-it': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'de-de': "Krebutack"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unruly Claw",
				'fr-fr': "Pince Rebelle",
				'es-es': "Garra Rebelde",
				'it-it': "Artiglio Ribelle",
				'pt-br': "Garra Desregrada",
				'de-de': "Unbändige Schere"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Cuando juegues a este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Energie, die an das Aktive Pokémon deines Gegners angelegt ist, auf den Ablagestapel deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Loving to battle, this Pokémon pinches all Pokémon that enter its territory with its pincers and throws them out.",
	},

	thirdParty: {
		cardmarket: 273623,
		tcgplayer: 95990
	}
}

export default card
