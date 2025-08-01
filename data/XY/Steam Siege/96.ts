import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
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
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gale Wings",
				fr: "Ailes Bourrasque",
				es: "Alas Vendaval",
				it: "Aliraffica",
				pt: "Asas de Vendaval",
				de: "Orkanschwingen"
			},
			effect: {
				en: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
				fr: "Si ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif.",
				es: "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo como tu Pokémon Activo.",
				it: "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi sceglierlo come Pokémon attivo e metterlo a faccia in giù.",
				pt: "Se este Pokémon estiver na sua mão quando estiver se preparando para jogar, poderá colocá-lo virado para baixo como seu Pokémon Ativo.",
				de: "Wenn sich dieses Pokémon während deiner Spielvorbereitung auf deiner Hand befindet, kannst du es verdeckt als dein Aktives Pokémon ablegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aero Blitz",
				fr: "Attaque Aérienne",
				es: "Envite Aéreo",
				it: "Blitz Aereo",
				pt: "Blitz Aéreo",
				de: "Aero-Blitz"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 cards e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
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

	thirdParty: {
		cardmarket: 290989
	}
}

export default card
