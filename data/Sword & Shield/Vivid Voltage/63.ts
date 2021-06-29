import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Klaps"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
				fr: "Mini-Métronome",
				es: "Minimetrónomo",
				it: "Minimetronomo",
				pt: "Mini-metrônomo",
				de: "Mini-Metronom"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent’s Active Pokémon’s attacks and use it as this attack.",
				fr: "Lancez une pièce. Si c’est face, choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Lancia una moneta. Se esce testa, scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				pt: "Jogue 1 moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				de: "Wirf 1 Münze. Wähle bei Kopf 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
