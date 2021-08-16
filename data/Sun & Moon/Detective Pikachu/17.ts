import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Métamorph",
		es: "Ditto",
		it: "Ditto",
		pt: "Ditto",
		de: "Ditto"
	},
	illustrator: "MPC Film",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy Anything",
				fr: "Copie Tout",
				es: "Copietear",
				it: "Copia Universale",
				pt: "Cópia Sem Limite",
				de: "Alleskopierer"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.",
				fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. Si ce Pokémon n’a pas l’Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
				es: "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
				it: "Scegli un attacco dei Pokémon del tuo avversario e usalo al posto di questo attacco. Se questo Pokémon non ha l’Energia necessaria per quell’attacco, questo attacco non ha effetto.",
				pt: "Escolha 1 dos ataques dos Pokémon do seu oponente e use-o como este ataque. Se este Pokémon não tiver a Energia necessária para usar aquele ataque, este ataque não fará nada.",
				de: "Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein. Wenn dieses Pokémon nicht die für jene Attacke notwendige Energie hat, hat diese Attacke keine Auswirkungen."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
