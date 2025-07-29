import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Zoroark BREAK",
		fr: "Zoroark TURBO",
		es: "Zoroark TURBO",
		it: "Zoroark TURBO",
		pt: "Zoroark TURBO",
		de: "Zoroark-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Foul Play",
				fr: "Tricherie",
				es: "Juego Sucio",
				it: "Ripicca",
				pt: "Jogo Sujo",
				de: "Schmarotzer"
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Scegli uno degli attacchi del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				de: "Wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286338
	}
}

export default card
