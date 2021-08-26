import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
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
				en: "Sing",
				fr: "Berceuse",
				es: "Canto",
				it: "Canto",
				pt: "Canção",
				de: "Gesang"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
				de: "Wirf 1 Münze. Bei „Kopf“ schläft das Aktive Pokémon deines Gegners jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome",
				es: "Metrónomo",
				it: "Metronomo",
				pt: "Metrônomo",
				de: "Metronom"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks and use it as this attack.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Scegli uno degli attacchi del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				de: "Wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff."
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



}

export default card
