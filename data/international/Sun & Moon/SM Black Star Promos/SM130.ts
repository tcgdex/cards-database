import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'it-it': "Manectric",
		'pt-br': "Manectric",
		'de-de': "Voltenso"
	},

	illustrator: "Ryota Murayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Electric Start",
				'fr-fr': "Démarrage Électrique",
				'es-es': "Salida Eléctrica",
				'it-it': "Avviamento Elettrico",
				'pt-br': "Largada Elétrica",
				'de-de': "Voltstart"
			},
			effect: {
				'en-us': "If you go second, and if this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon or on your Bench.",
				'fr-fr': "Si vous jouez en second et que ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif ou Pokémon de Banc.",
				'es-es': "Si sales segundo, y si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo como tu Pokémon Activo o en tu Banca.",
				'it-it': "Se inizi per secondo e hai questo Pokémon in mano durante l’allestimento del gioco, puoi metterlo a faccia in giù come tuo Pokémon attivo o in panchina.",
				'pt-br': "Se você for o segundo a jogar e este Pokémon estiver na sua mão enquanto estiver preparando seu jogo, você poderá colocá-lo virado para baixo como seu Pokémon Ativo ou no Banco.",
				'de-de': "Wenn du als Zweiter am Zug bist und dieses Pokémon während deiner Spielvorbereitung auf deiner Hand hast, kannst du es verdeckt in die Position deines Aktiven Pokémon oder auf deine Bank legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Double Charge",
				'fr-fr': "Charge Dupliquée",
				'es-es': "Doble Carga",
				'it-it': "Doppia Carica",
				'pt-br': "Carga Dupla",
				'de-de': "Doppelaufladung"
			},
			effect: {
				'en-us': "You may attach up to 2 basic Energy cards from your hand to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez attacher jusqu’à 2 cartes Énergie de base de votre main à l’un de vos Pokémon de Banc.",
				'es-es': "Puedes unir hasta 2 cartas de Energía Básica de tu mano a 1 de tus Pokémon en Banca.",
				'it-it': "Puoi assegnare fino a due carte Energia base dalla tua mano a uno dei tuoi Pokémon in panchina.",
				'pt-br': "Você pode ligar até 2 cartas de Energia básica da sua mão a 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst bis zu 2 Basis-Energiekarten aus deiner Hand an 1 der Pokémon auf deiner Bank anlegen."
			},
			damage: 40,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.",
	},
}

export default card
