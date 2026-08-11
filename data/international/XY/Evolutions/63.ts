import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sing",
				'fr-fr': "Berceuse",
				'es-es': "Canto",
				'it-it': "Canto",
				'pt-br': "Canção",
				'de-de': "Gesang"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metronome",
				'fr-fr': "Métronome",
				'es-es': "Metrónomo",
				'it-it': "Metronomo",
				'pt-br': "Metrônomo",
				'de-de': "Metronom"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				'it-it': "Scegli uno degli attacchi del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				'de-de': "Wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its adorable appearance makes it popular as a pet. However, it is rare and difficult to find.",
	},

	thirdParty: {
		cardmarket: 293416,
		tcgplayer: 124076
	}
}

export default card
