import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		741,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Vital Dance",
				'fr-fr': "Danse Vitale",
				'es-es': "Danza Vital",
				'it-it': "Danza Vitale",
				'pt-br': "Dança Vital",
				'de-de': "Munterer Tanz"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia base, mostrarle e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode procurar por até 2 cartas de Energia básica no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 2 Basis-Energiekarten durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Casual Slap",
				'fr-fr': "Gifle Amicale",
				'es-es': "Bofetada Casual",
				'it-it': "Sberletta",
				'pt-br': "Tapa Casual",
				'de-de': "Lässiger Klatscher"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Oricorio relaxes by swaying gently. This increases its psychic energy, which it then fires at its enemies.",
	},

	thirdParty: {
		cardmarket: 297478,
		tcgplayer: 130961
	}
}

export default card
