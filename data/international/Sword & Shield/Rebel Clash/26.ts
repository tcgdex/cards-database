import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Ninetales V",
		'fr-fr': "Feunard V",
		'es-es': "Ninetales V",
		'it-it': "Ninetales V",
		'pt-br': "Ninetales V",
		'de-de': "Vulnona V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [38],
	set: Set,

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nine-Tailed Shapeshifter",
				'fr-fr': "Polymorphe Multicaudal",
				'es-es': "Transformación Nueve Colas",
				'it-it': "Mutaforma a Nove Code",
				'pt-br': "Metamorfo de Nove Caudas",
				'de-de': "Neunschweifiger Gestaltwandler"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un'Energia da questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 200,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457578,
				tcgplayer: 213101
			}
		},
	],
}

export default card
