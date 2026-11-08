import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gale Wings",
				'fr-fr': "Ailes Bourrasque",
				'es-es': "Alas Vendaval",
				'it-it': "Aliraffica",
				'pt-br': "Asas de Vendaval",
				'de-de': "Orkanschwingen"
			},
			effect: {
				'en-us': "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
				'fr-fr': "Si ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif.",
				'es-es': "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo como tu Pokémon Activo.",
				'it-it': "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi sceglierlo come Pokémon attivo e metterlo a faccia in giù.",
				'pt-br': "Se este Pokémon estiver na sua mão quando estiver se preparando para jogar, poderá colocá-lo virado para baixo como seu Pokémon Ativo.",
				'de-de': "Wenn sich dieses Pokémon während deiner Spielvorbereitung auf deiner Hand befindet, kannst du es verdeckt als dein Aktives Pokémon ablegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Aero Blitz",
				'fr-fr': "Attaque Aérienne",
				'es-es': "Envite Aéreo",
				'it-it': "Blitz Aereo",
				'pt-br': "Blitz Aéreo",
				'de-de': "Aero-Blitz"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 2 cards e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},
			damage: 40,

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
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When attacking prey, it can reach speeds of up to 310 mph. It finishes its prey off with a colossal kick.",
	},

	thirdParty: {
		cardmarket: 290995,
		tcgplayer: 120156
	}
}

export default card
